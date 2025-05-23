<script lang="ts">
import type { KubernetesObject, V1PersistentVolumeClaim } from '@kubernetes/client-node';
import { StatusIcon, Tab } from '@podman-desktop/ui-svelte';
import { onDestroy, onMount } from 'svelte';
import { router } from 'tinro';
import { stringify } from 'yaml';

import { listenResource } from '/@/lib/kube/resource-listen';
import { kubernetesCurrentContextPersistentVolumeClaims } from '/@/stores/kubernetes-contexts-state';
import type { IDisposable } from '/@api/disposable';

import Route from '../../Route.svelte';
import MonacoEditor from '../editor/MonacoEditor.svelte';
import PVCIcon from '../images/PVCIcon.svelte';
import KubeEditYAML from '../kube/KubeEditYAML.svelte';
import DetailsPage from '../ui/DetailsPage.svelte';
import StateChange from '../ui/StateChange.svelte';
import { getTabUrl, isTabSelected } from '../ui/Util';
import { PVCUtils } from './pvc-utils';
import PVCActions from './PVCActions.svelte';
import PVCDetailsSummary from './PVCDetailsSummary.svelte';
import type { PVCUI } from './PVCUI';

interface Props {
  name: string;
  namespace: string;
}
let { name, namespace }: Props = $props();

let pvc: PVCUI | undefined = $state(undefined);
let detailsPage: DetailsPage | undefined = $state(undefined);
let kubePVC: V1PersistentVolumeClaim | undefined = $state(undefined);
let kubeError: string | undefined = $state(undefined);

let listener: IDisposable | undefined;

onMount(async () => {
  const pvcUtils = new PVCUtils();
  listener = await listenResource({
    resourceName: 'persistentvolumeclaims',
    name,
    namespace,
    listenEvents: false,
    legacyResourceStore: kubernetesCurrentContextPersistentVolumeClaims,
    onResourceNotFound: () => {
      if (detailsPage) {
        // the PVC has been deleted
        detailsPage.close();
      }
    },
    onResourceUpdated: (resource: KubernetesObject, isExperimental: boolean) => {
      pvc = pvcUtils.getPVCUI(resource);
      if (isExperimental) {
        kubePVC = resource;
      } else {
        loadDetails().catch((err: unknown) => console.error(`Error getting PVC details ${name}`, err));
      }
    },
  });
});

onDestroy(() => {
  listener?.dispose();
});

async function loadDetails(): Promise<void> {
  const getKubePVC = await window.kubernetesReadNamespacedPersistentVolumeClaim(name, namespace);
  if (getKubePVC) {
    kubePVC = getKubePVC;
  } else {
    kubeError = `Unable to retrieve Kubernetes details for ${name}`;
  }
}
</script>

{#if pvc}
  <DetailsPage title={pvc.name} subtitle={pvc.namespace} bind:this={detailsPage}>
    {#snippet iconSnippet()}
      {#if pvc}<StatusIcon icon={PVCIcon} size={24} status={pvc.status} />{/if}
    {/snippet}
    {#snippet actionsSnippet()}
      {#if pvc}<PVCActions pvc={pvc} detailed={true} />{/if}
    {/snippet}
    {#snippet detailSnippet()}
      {#if pvc}
        <div class="flex py-2 w-full justify-end text-sm text-[var(--pd-content-text)]">
          <StateChange state={pvc.status} />
        </div>
      {/if}
    {/snippet}
    {#snippet tabsSnippet()}
      <Tab title="Summary" selected={isTabSelected($router.path, 'summary')} url={getTabUrl($router.path, 'summary')} />
      <Tab title="Inspect" selected={isTabSelected($router.path, 'inspect')} url={getTabUrl($router.path, 'inspect')} />
      <Tab title="Kube" selected={isTabSelected($router.path, 'kube')} url={getTabUrl($router.path, 'kube')} />
    {/snippet}
    {#snippet contentSnippet()}
      <Route path="/summary" breadcrumb="Summary" navigationHint="tab">
        <PVCDetailsSummary pvc={kubePVC} kubeError={kubeError} />
      </Route>
      <Route path="/inspect" breadcrumb="Inspect" navigationHint="tab">
        <MonacoEditor content={JSON.stringify(kubePVC, undefined, 2)} language="json" />
      </Route>
      <Route path="/kube" breadcrumb="Kube" navigationHint="tab">
        <KubeEditYAML content={stringify(kubePVC)} />
      </Route>
    {/snippet}
  </DetailsPage>
{/if}
