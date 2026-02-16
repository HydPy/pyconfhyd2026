const SpeakerInitials = ({ speaker }) => {
  if (!speaker.name) return null;
  const parts = speaker.name.trim().split(/\s+/);
  const first = parts[0] ? parts[0][0] : '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return `${(first + last).toUpperCase()}`;
};

export default SpeakerInitials;
