import React from "react";
import { IUrlContextData,IUrlProviderProps } from "../@types/ContextTypes";
import { TUrl } from "../@types/UrlTypes";

const UrlContext = React.createContext<IUrlContextData>({
  urls: [],
  addUrl: () => {},
  deleteUrl: () => {},
  updateUrl: () => {},
});

export const UrlProvider: React.FC<IUrlProviderProps> = ({ children }) => {
  const [urls, setUrls] = React.useState(
    JSON.parse(localStorage.getItem('urls') || '[]')
  );

  const addUrl = (url:TUrl) => {
    const { id, longUrl, shortUrl } = url;
    const updatedUrls = [...urls, { id ,longUrl, shortUrl }];
    setUrls(updatedUrls);
    localStorage.setItem('urls', JSON.stringify(updatedUrls));
  };

  const deleteUrl = (id: string) => {
    const storedUrls = localStorage.getItem("urls");
  if (storedUrls) {
    const urls: TUrl[] = JSON.parse(storedUrls);

    const updatedUrls = urls.map((url: TUrl) => {
      if (url.id === id) {
        const { shortUrl, ...rest } = url;
        return rest;
      }
      return url;
    });

    localStorage.setItem("urls", JSON.stringify(updatedUrls));
    setUrls(updatedUrls);
  }
  };

  const updateUrl = (id: string, newUrl: string) => {
    const updatedUrls = urls.map((url:TUrl) =>
      url.id === id ? { ...url, longUrl: newUrl } : url
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
