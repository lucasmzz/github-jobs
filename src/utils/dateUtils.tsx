export const getDaysSincePost = (date) => {
  const today = new Date();
  const postDate = new Date(date);

  let dateDiff = undefined;
  if (postDate) {
    dateDiff = Math.ceil(Math.abs(today - postDate) / (1000 * 3600 * 24));
  }

  if (dateDiff < 0) {
    return;
  }

  return `${dateDiff} day${dateDiff > 1 ? "s" : ""} ago`;
};
