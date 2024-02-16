export function formatTime(dateString) {
  if (null || undefined) {
    return undefined;
  }
  const date = new Date(dateString);
  const now = new Date();

  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return `on ${date.toLocaleDateString("en-US", options)}`;
  }
}
