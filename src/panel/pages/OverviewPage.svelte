<WhitelistLayout>
  <div class="card">
    <CardHeader>
      <div slot="left">{$_('pages.overview.modes-title')}</div>
    </CardHeader>

    {#if modes.length === 0}
      <NoContent />
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

  const modes = [
    {
      id: 'closed-beta',
      nameKey: 'modes.defaults.closed-beta.name',
      icon: 'fas fa-lock',
      isActive: false,
    },
    {
      id: 'open-beta',
      nameKey: 'modes.defaults.open-beta.name',
      icon: 'fas fa-door-open',
      isActive: true,
    },
  ];
</script>
