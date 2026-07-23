<article class="container vstack gap-3">
  <PageActions>
    <PageNav slot="left">
      <PageNavItem href="/whitelist">{$_('tabs.overview')}</PageNavItem>
    </PageNav>
  </PageActions>

  {@render children?.()}
</article>

<script>
  import { _ } from '../../main';
  import { PageActions, PageNav, PageNavItem } from '@panomc/sdk/components/panel';

  let { children } = $props();
</script>
