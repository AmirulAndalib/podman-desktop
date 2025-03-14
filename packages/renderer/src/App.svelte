<script lang="ts">
import './app.css';
import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';
import '@patternfly/patternfly/patternfly-theme-dark.css';
import './override.css';
import { router } from 'tinro';

import Route from './Route.svelte';
import ContainerList from './lib/container/ContainerList.svelte';
import ImagesList from './lib/image/ImagesList.svelte';
import PreferencesPage from './lib/preferences/PreferencesPage.svelte';
import BuildImageFromContainerfile from './lib/image/BuildImageFromContainerfile.svelte';
import PullImage from './lib/image/PullImage.svelte';
import DockerExtension from './lib/docker-extension/DockerExtension.svelte';
import ContainerDetails from './lib/container/ContainerDetails.svelte';
import WelcomePage from './lib/welcome/WelcomePage.svelte';
import DashboardPage from './lib/dashboard/DashboardPage.svelte';
import HelpPage from './lib/help/HelpPage.svelte';
import StatusBar from './lib/statusbar/StatusBar.svelte';
import ImageDetails from './lib/image/ImageDetails.svelte';
import PodsList from './lib/pod/PodsList.svelte';
import PreferencesNavigation from './PreferencesNavigation.svelte';
import AppNavigation from './AppNavigation.svelte';
import VolumesList from './lib/volume/VolumesList.svelte';
import VolumeDetails from './lib/volume/VolumeDetails.svelte';
import KubePlayYAML from './lib/kube/KubePlayYAML.svelte';
import PodDetails from './lib/pod/PodDetails.svelte';
import ComposeDetails from './lib/compose/ComposeDetails.svelte';
import PodCreateFromContainers from './lib/pod/PodCreateFromContainers.svelte';
import DeployPodToKube from './lib/pod/DeployPodToKube.svelte';
import RunImage from './lib/image/RunImage.svelte';
import SendFeedback from './lib/feedback/SendFeedback.svelte';
import ToastHandler from './lib/toast/ToastHandler.svelte';
import QuickPickInput from './lib/dialogs/QuickPickInput.svelte';
import TaskManager from './lib/task-manager/TaskManager.svelte';
import MessageBox from './lib/dialogs/MessageBox.svelte';
import TitleBar from './lib/ui/TitleBar.svelte';
import TroubleshootingPage from './lib/troubleshooting/TroubleshootingPage.svelte';
import IconsStyle from './lib/style/IconsStyle.svelte';
import CustomPick from './lib/dialogs/CustomPick.svelte';
import ContextKey from './lib/context/ContextKey.svelte';
import CreateVolume from './lib/volume/CreateVolume.svelte';
import CommandPalette from './lib/dialogs/CommandPalette.svelte';

router.mode.hash();

//remember from where we come to preference pages
let nonSettingsPage = '/';
router.subscribe(function (navigation) {
  if (navigation.url !== undefined && !navigation.url.startsWith('/preferences')) {
    nonSettingsPage = navigation.url;
  }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.events?.receive('display-help', () => {
  router.goto('/help');
});

window.events?.receive('display-troubleshooting', () => {
  router.goto('/troubleshooting');
});
</script>

<Route path="/*" breadcrumb="Home" let:meta>
  <main class="flex flex-col w-screen h-screen overflow-hidden bg-charcoal-800">
    <IconsStyle />
    <TitleBar />
    <ContextKey />

    <WelcomePage />

    <div class="flex flex-row w-full h-full overflow-hidden">
      <MessageBox />
      <QuickPickInput />
      <CustomPick />
      <CommandPalette />
      <AppNavigation meta="{meta}" exitSettingsCallback="{() => router.goto(nonSettingsPage)}" />
      {#if meta.url.startsWith('/preferences')}
        <PreferencesNavigation meta="{meta}" />
      {/if}

      <div
        class="flex flex-col w-full h-full overflow-hidden"
        class:bg-charcoal-700="{!meta.url.startsWith('/preferences')}"
        class:bg-charcoal-800="{meta.url.startsWith('/preferences')}">
        <TaskManager />
        <SendFeedback />
        <ToastHandler />
        <Route path="/" breadcrumb="Dashboard Page">
          <DashboardPage />
        </Route>
        <Route path="/containers" breadcrumb="Containers" navigationHint="root">
          <ContainerList searchTerm="{meta.query.filter || ''}" />
        </Route>
        <Route path="/containers/:id/*" breadcrumb="Container Details" let:meta navigationHint="details">
          <ContainerDetails containerID="{meta.params.id}" />
        </Route>

        <Route path="/kube/play" breadcrumb="Play Kubernetes YAML">
          <KubePlayYAML />
        </Route>

        <Route path="/images" breadcrumb="Images" navigationHint="root">
          <ImagesList />
        </Route>
        <Route
          path="/images/:id/:engineId/:base64RepoTag/*"
          breadcrumb="Image Details"
          let:meta
          navigationHint="details">
          <ImageDetails
            imageID="{meta.params.id}"
            engineId="{decodeURI(meta.params.engineId)}"
            base64RepoTag="{meta.params.base64RepoTag}" />
        </Route>
        <Route path="/images/build" breadcrumb="Build an Image">
          <BuildImageFromContainerfile />
        </Route>
        <Route path="/images/run/*" breadcrumb="Run Image">
          <RunImage />
        </Route>
        <Route path="/images/pull" breadcrumb="Pull an Image">
          <PullImage />
        </Route>
        <Route path="/pods" breadcrumb="Pods" navigationHint="root">
          <PodsList />
        </Route>
        <Route path="/deploy-to-kube/:resourceId/:engineId/*" breadcrumb="Deploy to Kubernetes" let:meta>
          <DeployPodToKube
            resourceId="{decodeURI(meta.params.resourceId)}"
            engineId="{decodeURI(meta.params.engineId)}"
            type="container" />
        </Route>
        <!-- Same DeployPodToKube route, but instead we pass in the compose group name, then redirect to DeployPodToKube -->
        <Route path="/compose/deploy-to-kube/:composeGroupName/:engineId/*" breadcrumb="Deploy to Kubernetes" let:meta>
          <DeployPodToKube
            resourceId="{decodeURI(meta.params.composeGroupName)}"
            engineId="{decodeURI(meta.params.engineId)}"
            type="compose" />
        </Route>
        <Route path="/compose/:name/:engineId/*" breadcrumb="Compose Details" let:meta navigationHint="details">
          <ComposeDetails composeName="{decodeURI(meta.params.name)}" engineId="{decodeURI(meta.params.engineId)}" />
        </Route>
        <Route path="/pods/:kind/:name/:engineId/*" breadcrumb="Pod Details" let:meta navigationHint="details">
          <PodDetails
            podName="{decodeURI(meta.params.name)}"
            engineId="{decodeURIComponent(meta.params.engineId)}"
            kind="{decodeURI(meta.params.kind)}" />
        </Route>
        <Route path="/pod-create-from-containers" breadcrumb="Create Pod">
          <PodCreateFromContainers />
        </Route>
        <Route path="/volumes" breadcrumb="Volumes" navigationHint="root">
          <VolumesList />
        </Route>
        <Route path="/volumes/create" breadcrumb="Create a Volume">
          <CreateVolume />
        </Route>
        <Route path="/volumes/:name/:engineId/*" breadcrumb="Volume Details" let:meta navigationHint="details">
          <VolumeDetails volumeName="{decodeURI(meta.params.name)}" engineId="{decodeURI(meta.params.engineId)}" />
        </Route>
        <Route path="/preferences/*" breadcrumb="Settings">
          <PreferencesPage />
        </Route>
        <Route path="/contribs/:name/*" breadcrumb="Extension" let:meta>
          <DockerExtension name="{decodeURI(meta.params.name)}" />
        </Route>
        <Route path="/help" breadcrumb="Help">
          <HelpPage />
        </Route>
        <Route path="/troubleshooting" breadcrumb="Troubleshooting">
          <TroubleshootingPage />
        </Route>
      </div>
    </div>
    <StatusBar />
  </main>
</Route>
