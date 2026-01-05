const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'ihire-host',

  remotes: {
    'ihire-dashboard': 'http://localhost:4201/remoteEntry.json',
    'ihire-requisition': 'http://localhost:4202/remoteEntry.json',
    'ihire-interview': 'http://localhost:4203/remoteEntry.json',
    'ihire-talent': 'http://localhost:4204/remoteEntry.json',
    'ihire-audit': 'http://localhost:4205/remoteEntry.json',
    'ihire-report': 'http://localhost:4206/remoteEntry.json',
    'ihire-onboarding': 'http://localhost:4207/remoteEntry.json',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true,
  },
});
