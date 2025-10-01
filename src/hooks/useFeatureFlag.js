import { isFeatureEnabled, getFeatureFlag } from '@/config/featureFlags';

/**
 * Custom hook to check if a feature is enabled
 * @param {string} flagName - The name of the feature flag
 * @returns {boolean} - Whether the feature is enabled
 */
export const useFeatureFlag = (flagName) => {
  return isFeatureEnabled(flagName);
};

/**
 * Custom hook to get feature flag value
 * @param {string} flagName - The name of the feature flag
 * @returns {any} - The feature flag value
 */
export const useFeatureFlagValue = (flagName) => {
  return getFeatureFlag(flagName);
};
