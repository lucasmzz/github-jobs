export const getDaysSincePost = (date: string) => {
  const today: number = new Date().valueOf();
  const postDate: number = new Date(date).valueOf();

  let dateDiff: number | undefined = undefined;
  if (postDate) {
    dateDiff = Math.ceil(Math.abs(today - postDate) / (1000 * 3600 * 24));
  }

  if (!dateDiff || dateDiff < 0) {
    return;
  }

  return `${dateDiff} day${dateDiff > 1 ? "s" : ""} ago`;
};
