import React from "react";
import { IUrlContextData,IUrlProviderProps } from "../@types/ContextTypes";

const UrlContext = React.createContext<IUrlContextData>({
  urls: [],
  addUrl: () => {},
  deleteUrl: () => {},
  updateUrl: () => {},
});

export const UrlProvider: React.FC<IUrlProviderProps> = ({ children }) => {
  const [urls, setUrls] = React.useState<{id:string, longUrl: string; shortUrl: string }[]>(
    JSON.parse(localStorage.getItem('urls') || '[]')
  );

  const addUrl = (id:string, longUrl: string, shortUrl: string) => {
    const updatedUrls = [...urls, { id ,longUrl, shortUrl }];
    setUrls(updatedUrls);
    localStorage.setItem('urls', JSON.stringify(updatedUrls));
  };

  const deleteUrl = (id: string) => {
    const updatedUrls = urls.filter((url) => url.id !== id);
    setUrls(updatedUrls);
    localStorage.setItem('urls', JSON.stringify(updatedUrls));
  };

  const updateUrl = (id: string, newLongUrl: string) => {
    const updatedUrls = urls.map((url) =>
      url.id === id ? { ...url, longUrl: newLongUrl } : url
    );
    setUrls(updatedUrls);
    localStorage.setItem('urls', JSON.stringify(updatedUrls));
  };


  return (
    <UrlContext.Provider value={{ urls, addUrl, deleteUrl, updateUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export default UrlContext;
