export const generateUrl = (length: number, longUrl: string): string => {
  const truncatedString = "http://example.com/" + longUrl?.slice(0, length);
  return truncatedString;
};
