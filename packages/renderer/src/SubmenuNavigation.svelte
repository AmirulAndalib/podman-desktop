<script lang="ts">
import { SettingsNavItem } from '@podman-desktop/ui-svelte';
import type { TinroRouteMeta } from 'tinro';

import { lastSubmenuPages } from './stores/breadcrumb';
import type { NavigationRegistryEntry } from './stores/navigation/navigation-registry';

export let title: string;
export let items: NavigationRegistryEntry[] | undefined;
export let link: string;
export let meta: TinroRouteMeta;

let pages = $lastSubmenuPages;
if (!pages[title]) {
  pages[title] = link;
  lastSubmenuPages.set(pages);
}
</script>

<nav
  class="z-1 w-leftsidebar min-w-leftsidebar flex-col justify-between flex transition-all duration-500 ease-in-out bg-[var(--pd-secondary-nav-bg)] border-[var(--pd-global-nav-bg-border)] border-r-[1px]"
  aria-label={title + ' Navigation Bar'}>
  <div class="flex items-center">
    <div class="pt-4 px-3 mb-5">
      <p
        class="text-xl font-semibold text-[color:var(--pd-secondary-nav-header-text)] border-l-[4px] border-transparent">
        {title}
      </p>
    </div>
  </div>
  <div class="h-full overflow-y-auto" style="margin-bottom:auto">
    {#each items ?? [] as item, index (index)}
      <SettingsNavItem title={item.tooltip} href={item.link} selected={meta.url.startsWith(item.link)} onClick={(): string => pages[title] = item.link}
      ></SettingsNavItem>
    {/each}
  </div>
</nav>
