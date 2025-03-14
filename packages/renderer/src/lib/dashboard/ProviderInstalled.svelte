<script lang="ts">
import type { CheckStatus, ProviderInfo } from '../../../../main/src/plugin/api/provider-info';
import PreflightChecks from './PreflightChecks.svelte';
import ProviderLinks from './ProviderLinks.svelte';
import ProviderLogo from './ProviderLogo.svelte';
import ProviderUpdateButton from './ProviderUpdateButton.svelte';
import { onDestroy, onMount } from 'svelte';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import { TerminalSettings } from '../../../../main/src/plugin/terminal-settings';
import { getPanelDetailColor } from '../color/color';
import {
  type InitializationContext,
  type InitializationMode,
  InitializationSteps,
  InitializeAndStartMode,
  InitializeOnlyMode,
} from './ProviderInitUtils';
import Steps from '../ui/Steps.svelte';
import Spinner from '../ui/Spinner.svelte';

export let provider: ProviderInfo;
export let initializationContext: InitializationContext;

let initializationButtonVisible = true;
let initializeInProgress = false;

let initializeError: string | undefined = undefined;

let preflightChecks: CheckStatus[] = [];

let noErrors = true;

let logsXtermDiv: HTMLDivElement;
let logsTerminal: Terminal;

// Terminal resize
let resizeObserver: ResizeObserver;
let termFit: FitAddon;
let installationOptionsMenuVisible = false;
let installationOptionSelected = InitializeAndStartMode;

// no initialize support, hide the button
$: initializationButtonVisible =
  provider.containerProviderConnectionInitialization || provider.kubernetesProviderConnectionInitialization;

function showLastExecutionError() {
  initializeError = initializationContext.error;
  logsTerminal?.write('Initialization failed. Please check the error below and try again' + '\r\n');
  logsTerminal?.write(initializeError + '\r');
}

async function initializeProvider() {
  initializeError = undefined;
  logsTerminal.clear();
  initializeInProgress = true;
  initializationContext.promise = window.initializeProvider(provider.internalId);
  initializationContext.promise.catch((error: unknown) => {
    initializationContext.error = String(error);
    initializationButtonVisible = true;
    logsTerminal.write(error + '\r');
    console.error('Error while initializing the provider', error);
  });
  initializeInProgress = false;
}

async function refreshTerminal() {
  // missing element, return
  if (!logsXtermDiv) {
    console.log('missing xterm div, exiting...');
    return;
  }
  // grab font size
  const fontSize = await window.getConfigurationValue<number>(
    TerminalSettings.SectionName + '.' + TerminalSettings.FontSize,
  );
  const lineHeight = await window.getConfigurationValue<number>(
    TerminalSettings.SectionName + '.' + TerminalSettings.LineHeight,
  );

  logsTerminal = new Terminal({
    fontSize,
    lineHeight,
    disableStdin: true,
    theme: {
      background: getPanelDetailColor(),
    },
    convertEol: true,
  });
  termFit = new FitAddon();
  logsTerminal.loadAddon(termFit);

  logsTerminal.open(logsXtermDiv);
  // disable cursor
  logsTerminal.write('\x1b[?25l');

  // call fit addon each time we resize the window
  window.addEventListener('resize', () => {
    termFit.fit();
  });
  termFit.fit();
}

onMount(async () => {
  // Refresh the terminal on initial load
  await refreshTerminal();
  // show error if last execution failed
  showLastExecutionError();

  // Resize the terminal each time we change the div size
  resizeObserver = new ResizeObserver(() => {
    termFit?.fit();
  });

  // Observe the terminal div
  resizeObserver.observe(logsXtermDiv);
});

onDestroy(() => {
  // Cleanup the observer on destroy
  resizeObserver?.unobserve(logsXtermDiv);
});

function updateOptionsMenu(visible: boolean) {
  installationOptionsMenuVisible = visible;
}

function onInstallationClick() {
  initializeInProgress = true;
  initializationButtonVisible = false;
  initializationContext.mode = installationOptionSelected as InitializationMode;
  initializeProvider();
}
</script>

<div class="p-2 flex flex-col bg-charcoal-800 rounded-lg" role="region" aria-label="{provider.name} Provider">
  <ProviderLogo provider="{provider}" />
  <div class="flex flex-col items-center text-center">
    <p class="text-xl text-gray-400">
      {provider.name}
      {#if provider.version}
        v{provider.version}
      {/if}
      is installed but not ready
    </p>
    <p class="text-base text-gray-700">
      To start working with containers, {provider.name} needs to be initialized.
    </p>

    <div class="mt-5" class:hidden="{!initializationButtonVisible}">
      <div class="bg-gray-300 text-white">
        <button
          class="float-left bg-purple-600 hover:bg-purple-500 pt-2 pr-3 pl-3 pb-2 text-[13px] text-white mr-px w-[180px]"
          on:click="{onInstallationClick}">
          {installationOptionSelected}
        </button>
        <button
          class="inline-block bg-purple-600 hover:bg-purple-500 text-[13px] text-white pt-2 pr-3 pl-3 pb-2 w-[32px]"
          on:click="{() => updateOptionsMenu(!installationOptionsMenuVisible)}">
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
      <div
        class="-z-1 min-w-[130px] m-auto bg-primary text-[13px] text-white"
        class:hidden="{!installationOptionsMenuVisible}">
        <ul class="w-full outline-none bg-charcoal-800 rounded-sm placeholder-gray-700">
          <li>
            <button
              class="w-full p-2 {installationOptionSelected === InitializeOnlyMode
                ? 'bg-purple-600 text-white'
                : 'bg-purple-700 text-gray-700'} hover:bg-purple-500 cursor-pointer"
              on:click="{() => {
                installationOptionSelected = InitializeOnlyMode;
                installationOptionsMenuVisible = false;
              }}">
              {InitializeOnlyMode}
              {provider.name}
            </button>
          </li>
          <li>
            <button
              class="w-full p-2 {installationOptionSelected === InitializeAndStartMode
                ? 'bg-purple-600 text-white'
                : 'bg-purple-700 text-gray-700'} hover:bg-purple-500 cursor-pointer"
              on:click="{() => {
                installationOptionSelected = InitializeAndStartMode;
                installationOptionsMenuVisible = false;
              }}">
              {InitializeAndStartMode}
              {provider.name}
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-5" class:hidden="{!initializeInProgress}">
      {#if installationOptionSelected === InitializeAndStartMode}
        <Steps steps="{InitializationSteps}" />
      {/if}
      <div class="flex flex-col text-gray-700">
        <div>Initializing</div>
        <div class="my-2">
          <Spinner />
        </div>
      </div>
    </div>

    <div
      class=""
      style="background-color: {getPanelDetailColor()}; width: 100%; text-align: left; display: {initializeError
        ? 'block'
        : 'none'}"
      class:h-full="{noErrors === false}"
      class:min-w-full="{noErrors === false}"
      bind:this="{logsXtermDiv}">
    </div>
  </div>

  {#if provider.updateInfo?.version && provider.version !== provider.updateInfo?.version}
    <div class="mt-5 mb-1 w-full flex justify-around">
      <ProviderUpdateButton onPreflightChecks="{checks => (preflightChecks = checks)}" provider="{provider}" />
    </div>
  {/if}
  <PreflightChecks preflightChecks="{preflightChecks}" />

  <ProviderLinks provider="{provider}" />
</div>
