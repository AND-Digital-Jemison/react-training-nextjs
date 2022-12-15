export const formatUTCDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
