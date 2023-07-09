import React, { useState, useContext } from 'react';
import UrlContext from '../Context/UrlContext';
import generateId from '../utils/generateId';

const EntryPage: React.FC = () => {
  const { addUrl } = useContext(UrlContext);
  const [formData, setFormData] = useState({ id:"", longUrl: '', shortUrl: '' });

  const handleUrlShorten = () => {
    // Generate short URL
    const customId = generateId(4);
    const generatedShortUrl =`http://example.com/${generateId(7)}`
    const generatedLongUrl = `http://example.com/${generateId(15)}`;

    const newUrl = {
      id: customId,
      longUrl: generatedLongUrl,
      shortUrl: generatedShortUrl,
    };
  
    // Get the existing URLs from localStorage
    const existingUrls = JSON.parse(localStorage.getItem('urls') || '[]');
  
    // Update the URLs array with the new URL
    const updatedUrls = [...existingUrls, newUrl];
  
    // Store the updated URLs in localStorage
    localStorage.setItem('urls', JSON.stringify(updatedUrls));
  
    
    addUrl(newUrl.id, formData.longUrl, generatedShortUrl);
    // Clear form inputs
    setFormData({ id:customId, longUrl: generatedLongUrl, shortUrl: generatedShortUrl });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <input
        type="text"
        placeholder="Enter a long URL"
        name="longUrl"
        value={formData.longUrl}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
      />
      <button
        onClick={handleUrlShorten}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
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
            className="text-blue-500 hover:underline break-all"
          >
            {formData.shortUrl}
          </a>
        </div>
      )}
      <button
        onClick={handleUrlShorten}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
      >
        Long URL
      </button>

      {formData.longUrl && (
        <div className="mt-4">
          <p className="text-lg">Long URL:</p>
          <a
            href={formData.longUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-all"
          >
            {formData.longUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default EntryPage;
