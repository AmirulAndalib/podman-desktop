<script lang="ts">
import type { CheckStatus, ProviderInfo } from '../../../../main/src/plugin/api/provider-info';
import PreflightChecks from './PreflightChecks.svelte';
import ProviderWarnings from './ProviderWarnings.svelte';
import ProviderLinks from './ProviderLinks.svelte';
import ProviderLogo from './ProviderLogo.svelte';
import ProviderUpdateButton from './ProviderUpdateButton.svelte';

export let provider: ProviderInfo;

let preflightChecks: CheckStatus[] = [];
</script>

<div class="p-2 flex flex-col bg-charcoal-800 rounded-lg" role="region" aria-label="{provider.name} Provider">
  <ProviderLogo provider="{provider}" />
  <div class="flex flex-col items-center text-center">
    <p class="text-xl text-gray-400">
      {provider.name} is running
    </p>
    {#if provider.version}
      <p class="text-base capitalize font-semibold text-gray-700">
        version {provider.version}
      </p>
    {/if}
    {#if provider.containerConnections.length > 0}
      <div class="flex flex-row text-xs text-gray-900 mt-4">
        <p>
          {provider.containerConnections.map(c => c.name).join(', ')}
        </p>
      </div>
    {/if}
  </div>
  {#if provider.updateInfo?.version && provider.version !== provider.updateInfo?.version}
    <div class="mt-5 mb-1 w-full flex justify-around">
      <ProviderUpdateButton onPreflightChecks="{checks => (preflightChecks = checks)}" provider="{provider}" />
    </div>
  {/if}
  <PreflightChecks preflightChecks="{preflightChecks}" />

  <ProviderWarnings provider="{provider}" />
  <ProviderLinks provider="{provider}" />
</div>
