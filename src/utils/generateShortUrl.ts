export const generateUrl = (longUrl: string, length: number): string => {
  if (longUrl.length <= length) {
    return longUrl;
  }
  const truncatedString = "http://example.com/" + longUrl.slice(0, length);
  return truncatedString;
};
