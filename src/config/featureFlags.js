/**
 * Feature Flags Configuration
 *
 * This file controls which features are enabled/disabled for the conference website.
 * Update these flags to gradually roll out features for the next conference.
 */

export const FEATURE_FLAGS = {
  KEYNOTE_SPEAKERS: false,
  SPONSORS: true,
  COMMUNITY_PARTNERS: true,
  MEET_ORGANIZERS: true,
  SPEAKERS_PAGE: true,
  TICKETS: true,
  BLOG_POSTS: true,
  JOB_BOARD: true,
  SCHEDULE: true,
  WELCOME_GUIDE: true,
  OUR_TEAM: true,
  TRAVEL: true,
  COC_REPORTING_GUIDE: true,
  FAQ: true
};

export const isFeatureEnabled = (flagName) => {
  return FEATURE_FLAGS[flagName] === true;
};


export const getFeatureFlag = (flagName) => {
  return FEATURE_FLAGS[flagName];
};