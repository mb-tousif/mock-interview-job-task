import { TUrl } from "./UrlTypes";

export interface IUrlContextData {
    urls: TUrl[];
    addUrl: (url:TUrl) => void;
    deleteUrl: (id: string) => void;
    updateUrl: (id: string, payload: string) => void;
  }

export interface IUrlProviderProps {
  children: React.ReactNode;
}