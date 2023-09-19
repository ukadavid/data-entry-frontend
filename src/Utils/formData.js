export const formatDate = (date) => {
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};
