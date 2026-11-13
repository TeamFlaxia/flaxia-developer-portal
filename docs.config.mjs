/**
 * Third-party-facing documentation manifest.
 *
 * Documents are referenced from their source repositories through git
 * submodules (see .gitmodules) and copied into dist/docs/ at build time by
 * scripts/build.mjs. Internal engineering docs are intentionally not listed.
 */

export const SITE_BASE = 'https://flaxia-developer.pages.dev';

export const REPOS = {
  flaxia: 'TeamFlaxia/flaxia',
  'flaxia-crowd': 'TeamFlaxia/flaxia-crowd',
  'flaxia-auth': 'TeamFlaxia/flaxia-auth',
};

// [submodule, path inside the submodule, path in dist/docs, section, group]
export const DOCS = [
  ['flaxia', 'docs/developer/README.md', 'flaxia/developer/README.md', 'Flaxia', 'Developer'],
  ['flaxia', 'docs/developer/game-api.md', 'flaxia/developer/game-api.md', 'Flaxia', 'Developer'],
  ['flaxia', 'docs/developer/sdk.md', 'flaxia/developer/sdk.md', 'Flaxia', 'Developer'],
  ['flaxia', 'docs/developer/rest-api.md', 'flaxia/developer/rest-api.md', 'Flaxia', 'Developer'],
  ['flaxia', 'docs/developer/publishing.md', 'flaxia/developer/publishing.md', 'Flaxia', 'Developer'],
  ['flaxia', 'docs/multiplayer.md', 'flaxia/guides/multiplayer.md', 'Flaxia', 'Guides'],
  ['flaxia', 'docs/how-to-use-multiplayer.md', 'flaxia/guides/how-to-use-multiplayer.md', 'Flaxia', 'Guides'],
  ['flaxia-crowd', 'docs/getting-started.md', 'crowd/guides/getting-started.md', 'Flaxia Crowd', 'Guides'],
  ['flaxia-crowd', 'docs/sdk-guide.md', 'crowd/guides/sdk-guide.md', 'Flaxia Crowd', 'Guides'],
  ['flaxia-crowd', 'docs/node-guide.md', 'crowd/guides/node-guide.md', 'Flaxia Crowd', 'Guides'],
  ['flaxia-crowd', 'docs/worker-guide.md', 'crowd/guides/worker-guide.md', 'Flaxia Crowd', 'Guides'],
  ['flaxia-crowd', 'packages/sdk/README.md', 'crowd/packages/sdk.md', 'Flaxia Crowd', 'Packages'],
  ['flaxia-crowd', 'packages/node/README.md', 'crowd/packages/node.md', 'Flaxia Crowd', 'Packages'],
  ['flaxia-crowd', 'packages/worker/README.md', 'crowd/packages/worker.md', 'Flaxia Crowd', 'Packages'],
  ['flaxia-crowd', 'packages/node-native/README.md', 'crowd/packages/node-native.md', 'Flaxia Crowd', 'Packages'],
  ['flaxia-crowd', 'packages/text-analyzer/README.md', 'crowd/packages/text-analyzer.md', 'Flaxia Crowd', 'Packages'],
  ['flaxia-auth', 'docs/api.md', 'auth/api.md', 'Flaxia Auth', 'API'],
];
