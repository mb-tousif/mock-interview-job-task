export interface IUrlContextData {
    urls: { id:string, longUrl: string; shortUrl: string }[];
    addUrl: (id:string, longUrl: string, shortUrl: string) => void;
    deleteUrl: (shortUrl: string) => void;
    updateUrl: (longUrl: string, shortUrl: string) => void;
  }

export interface IUrlProviderProps {
  children: React.ReactNode;
}