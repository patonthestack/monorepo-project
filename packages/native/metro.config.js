/* eslint @typescript-eslint/no-var-requires: 0 */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const blacklist = require('metro-config/src/defaults/exclusionList');

const othersWorkspace = ['web'];
const currentDir = path.resolve(__dirname);
const root = path.resolve(currentDir, '../..');
const packages = path.resolve(root, 'packages');
const ignorePackages = othersWorkspace.map(
  f => new RegExp(`${path.resolve(packages, f)}/.*`),
); // Ignore workspace packages
const extraNodeModules = othersWorkspace.reduce(
  (ex, name) => ({
    ...ex,
    [name]: path.join(root, 'node_modules', name),
  }),
  {},
);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    blacklistRE: blacklist(
      [
        new RegExp(
          `^${escape(path.join(root, 'node_modules', 'react-native'))}\\/.*$`,
        ),
      ].concat(
        othersWorkspace.map(
          w => new RegExp(`^${escape(path.join(w, 'node_modules', ''))}\\/.*$`),
        ),
        ignorePackages,
      ),
    ),
    extraNodeModules: {
      ...extraNodeModules,
      'react-native': path.join(currentDir, 'node_modules', 'react-native'),
    },
  },
  watchFolders: [root],
};
