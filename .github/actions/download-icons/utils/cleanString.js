const cleanString = (str) =>
  str
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/ /g, "_")
    .toLowerCase();

export { cleanString };
