export type TUrl = {
  id: string;
  longUrl?: string;
  shortUrl?: string;
};

export type TUrlGenerateParams = {
  longUrl?: string;
  length: number;
};