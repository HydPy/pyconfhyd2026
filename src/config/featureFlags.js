/**
 * Feature Flags Configuration
 *
 * This file controls which features are enabled/disabled for the conference website.
 * Update these flags to gradually roll out features for the next conference.
 */

export const FEATURE_FLAGS = {
  KEYNOTE_SPEAKERS: false,
  SPONSORS: false,
  COMMUNITY_PARTNERS: false,
  MEET_ORGANIZERS: true,
  SPEAKERS_PAGE: false,
  TICKETS: false,
  BLOG_POSTS: false,
  JOB_BOARD: false,
  SCHEDULE: false,
  WELCOME_GUIDE: false,
  OUR_TEAM: false,
  TRAVEL: false,
  COC_REPORTING_GUIDE: true,
  FAQ: false,
};

export const isFeatureEnabled = (flagName) => {
  return FEATURE_FLAGS[flagName] === true;
};

export const getFeatureFlag = (flagName) => {
  return FEATURE_FLAGS[flagName];
};
