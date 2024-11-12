export function calculateYearsAgo(year) {
  const currentYear = new Date().getFullYear();
  const yearsAgo = currentYear - year;
  return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
}
