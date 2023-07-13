import React, { useState, useContext } from 'react';
import UrlContext from '../Context/UrlContext';
import generateId from '../utils/generateId';
import { generateUrl } from '../utils/generateUrl';

const EntryPage: React.FC = () => {
  const { addUrl } = useContext(UrlContext);
  const [formData, setFormData] = useState({ id:"", longUrl: '', shortUrl: '' });

  const handleUrlShorten = () => {
    const customId = generateId(6);
    const generatedShortUrl = generateUrl(5, formData.longUrl)
    const newUrl = {
      id: customId,
      longUrl: generatedLongUrl,
      shortUrl: generatedShortUrl,
    };
    const existingUrls = JSON.parse(localStorage.getItem('urls') || '[]');
    const updatedUrls = [...existingUrls, newUrl];
    localStorage.setItem('urls', JSON.stringify(updatedUrls));
    addUrl(newUrl);
    setFormData({ id:customId, longUrl: generatedLongUrl, shortUrl: generatedShortUrl });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const generatedLongUrl = generateUrl(15, formData.longUrl)
  
  return (
    <div className="max-w-lg mx-auto py-8 min-h-70vh">
      <input
        type="text"
        placeholder="Enter a long URL"
        name="longUrl"
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
      />
      <button
        onClick={handleUrlShorten}
        className="bg-[#046568] hover:bg-[#02393b] text-white font-semibold px-4 py-2 rounded-md"
      >
        Shorten URL
      </button>
      {formData.shortUrl && (
        <div className="mt-4">
          <p className="text-lg">Short URL:</p>
          <a
            href={formData.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#046568] hover:underline break-all"
          >
            {formData.shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default EntryPage;
