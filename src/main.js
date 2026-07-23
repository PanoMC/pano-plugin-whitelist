import { PanoPlugin, viewComponent } from '@panomc/sdk';
import { derived } from 'svelte/store';
import { _ as i18n } from '@panomc/sdk/utils/language';

const pluginId = 'pano-plugin-whitelist';
const managePermission = `pano.plugin.${pluginId}.manage.whitelist`;

// this is to render plugin translations
export const _ = derived(i18n, ($_fn) => {
  return (key, options) => $_fn(`plugins.${pluginId}.${key}`, options);
});

export default class WhitelistPlugin extends PanoPlugin {
  onLoad() {
    const pano = this.pano;

    if (pano.isPanel) {
      pano.ui.page.register({
        path: '/whitelist',
        component: viewComponent(() => import('./panel/pages/OverviewPage.svelte')),
        permission: managePermission,
      });

      pano.ui.nav.site.editNavLinks((items) => {
        const whitelistLink = {
          href: '/whitelist',
          text: `plugins.${pluginId}.nav.whitelist`,
          icon: 'fas fa-scroll',
          startsWith: true,
          permission: managePermission,
        };

        const playersIndex = items.findIndex((item) => item.href === '/players');
        if (playersIndex !== -1) {
          items.splice(playersIndex, 0, whitelistLink);
        } else {
          items.push(whitelistLink);
        }

        return items;
      });
    }
  }

  onContextUpdate(ctx) {}

  onUnload() {}
}
