import Constants from 'expo-constants';

const getCurrentAppVersion = () => {
  const appVersion = Constants.expoConfig.version
  return appVersion;
};

// Usage example
console.log('Current app version:', getCurrentAppVersion());
