import React, { useContext } from "react";
import UrlContext from "../Context/UrlContext";

const ListPage: React.FC = () => {
  const { urls } = useContext(UrlContext);

  return (
    <div className="max-w-lg mx-auto py-8 min-h-70vh">
      <h2 className="text-2xl font-semibold mb-4">List of Short URLs:</h2>
      {urls.map((url) => (
        <div key={url.id} className="mb-4 md:flex">
          {url.shortUrl && url.shortUrl.length ? (
            <a
              href={`${url.shortUrl}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#046568] hover:bg-[#02393b] text-white font-semibold px-4 py-2 rounded-md mt-2"
            >
              Short URL: {url.shortUrl!}
            </a>
          ) : (
            <p>No Short URL Available or Short URL deleted</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListPage;
