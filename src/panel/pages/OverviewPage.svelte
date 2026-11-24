<WhitelistLayout>
  <div class="card">
    <CardHeader>
      <div slot="left">{$_('pages.overview.modes-title')}</div>
    </CardHeader>

    {#if modes.length === 0}
      <NoContent text={$_('pages.overview.no-modes')} />
    {:else}
      <ModesTimeline {modes} />
    {/if}
  </div>
</WhitelistLayout>

<script module>
  /**
   * @type {import("@sveltejs/kit").PageLoad}
   */
  export async function load(event) {
    const { parent } = event;
    const { pageTitle } = await parent();

    pageTitle.set('plugins.pano-plugin-whitelist.pages.whitelist.title');

    return {};
  }
</script>

<script>
  import { _ } from '../../main';
  import { CardHeader, NoContent } from '@panomc/sdk/components/panel';
  import WhitelistLayout from '../layouts/WhitelistLayout.svelte';
  import ModesTimeline from '../components/ModesTimeline.svelte';

  // Modes come from the backend once it exists; until then show the empty state instead of placeholder data.
  /** @type {{ id: string, nameKey: string, icon: string, isActive: boolean }[]} */
  const modes = [];
</script>
