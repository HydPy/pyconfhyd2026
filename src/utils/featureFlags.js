import { isFeatureEnabled } from '@/config/featureFlags';

/**
 * Filters navigation items based on feature flags
 * @param {Array} navItems - Array of navigation items
 * @returns {Array} Filtered navigation items
 */
export const filterNavItemsByFeatureFlags = (navItems) => {
  return navItems
    .map((item) => {
      // Check if the main item should be shown
      if (item.featureFlag && !isFeatureEnabled(item.featureFlag)) {
        return null;
      }

      // If item has children, filter them
      if (item.children) {
        const filteredChildren = item.children.filter((child) => {
          return !child.featureFlag || isFeatureEnabled(child.featureFlag);
        });

        // If no children remain after filtering, hide the parent item
        if (filteredChildren.length === 0) {
          return null;
        }

        return {
          ...item,
          children: filteredChildren,
        };
      }

      return item;
    })
    .filter(Boolean); // Remove null items
};
