export const toDisplayDateString = (date) => {
  return new Date(date).toLocaleDateString("ja-JP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
