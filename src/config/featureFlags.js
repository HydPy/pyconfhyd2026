/**
 * Feature Flags Configuration
 *
 * This file controls which features are enabled/disabled for the conference website.
 * Update these flags to gradually roll out features for the next conference.
 */

export const FEATURE_FLAGS = {
  KEYNOTE_SPEAKERS: true,
  SPONSORS: true,
  COMMUNITY_PARTNERS: true,
  MEET_ORGANIZER: true,
  WHY_ATTEND: true,
  EPIC_FRAMES: true,
  SPEAKERS_PAGE: false,
  TICKETS: true,
  BLOG_POSTS: true,
  JOB_BOARD: true,
  SCHEDULE: false,
  WELCOME_GUIDE: false,
  OUR_TEAM: false,
  TRAVEL: false,
  COC_REPORTING_GUIDE: true,
  FAQ: true,
};

export const isFeatureEnabled = (flagName) => {
  return FEATURE_FLAGS[flagName] === true;
};

export const getFeatureFlag = (flagName) => {
  return FEATURE_FLAGS[flagName];
};
