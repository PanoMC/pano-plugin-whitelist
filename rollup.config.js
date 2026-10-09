import { panoPlugin } from '@panomc/plugin-kit/rollup';

// The build is the kit preset (@panomc/plugin-kit): server and client bundles, the entry facade (the entry is a pure
// re-export of the main chunk, so module state is evaluated once), `panoSdk = 2`, the svelte version guard against the
// SDK pin, PANO_SDK_DIR, DEV and BUNDLE_SDK all live there. This plugin has no theme views, only panel components.
export default panoPlugin();
