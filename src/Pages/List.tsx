import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';

const ListPage: React.FC = () => {
  const { urls } = useContext(UrlContext);

  const handleOpenUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">List of Short URLs:</h2>
      {urls.map((url) => (
        <div key={url.shortUrl} className="mb-4 md:flex">
          <p className="text-lg md:m-2">Short URL: {url.shortUrl}</p>
          <button
            onClick={() => handleOpenUrl(url.longUrl!)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mt-2"
          >
            Open Long URL
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
