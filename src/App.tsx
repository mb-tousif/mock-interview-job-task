// import React, { useState } from 'react';

// const App: React.FC = () => {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortUrls, setShortUrls] = useState<string[]>([]);

//   const handleLongUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setLongUrl(event.target.value);
//   };

//   const handleShortenUrl = () => {
//     if (longUrl.trim() !== '') {
//       const shortenedUrl = generateShortUrl();
//       setShortUrls([...shortUrls, shortenedUrl]);
//       setLongUrl('');
//     }
//   };

//   const handleDeleteUrl = (index: number) => {
//     const updatedShortUrls = [...shortUrls];
//     updatedShortUrls.splice(index, 1);
//     setShortUrls(updatedShortUrls);
//   };

//   const generateShortUrl = () => {
//     // Generate a unique short URL using the current timestamp
//     const timestamp = Date.now().toString();
//     const shortUrl = `https://example.com/${timestamp}`;
//     return shortUrl;
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>

//       {/* Entry page */}
//       <div className="mb-8">
//         <input
//           type="text"
//           className="border border-gray-300 px-2 py-1 rounded-md w-full"
//           placeholder="Enter a long URL"
//           value={longUrl}
//           onChange={handleLongUrlChange}
//         />
//         <button
//           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={handleShortenUrl}
//         >
//           Shorten URL
//         </button>
//       </div>

//       {/* List page */}
//       <div>
//         <h2 className="text-lg font-bold mb-2">Short URLs:</h2>
//         {shortUrls.length > 0 ? (
//           <ul>
//             {shortUrls.map((shortUrl, index) => (
//               <li key={shortUrl}>
//                 <a
//                   href={shortUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   {shortUrl}
//                 </a>
//                 <button
//                   className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md"
//                   onClick={() => handleDeleteUrl(index)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No short URLs created yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';

interface ShortUrl {
  id: string;
  longUrl: string;
}

const App: React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrls, setShortUrls] = useState<ShortUrl[]>([]);

  const handleLongUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(event.target.value);
  };

  const handleShortenUrl = () => {
    if (longUrl.trim() !== '') {
      const shortenedUrl = generateShortUrl();
      const newShortUrl: ShortUrl = {
        id: shortenedUrl,
        longUrl: longUrl,
      };
      setShortUrls([...shortUrls, newShortUrl]);
      setLongUrl('');
    }
  };

  const handleDeleteUrl = (id: string) => {
    const updatedShortUrls = shortUrls.filter((url) => url.id !== id);
    setShortUrls(updatedShortUrls);
  };

  const generateShortUrl = () => {
    // Generate a unique short URL using the current timestamp
    const timestamp = Date.now().toString();
    const shortUrl = `https://example.com/${timestamp}`;
    return shortUrl;
  };

  const renderShortUrls = () => {
    if (shortUrls.length === 0) {
      return <p>No short URLs created yet.</p>;
    }

    return (
      <ul>
        {shortUrls.map((shortUrl) => (
          <li key={shortUrl.id}>
            <a
              href={shortUrl.longUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {shortUrl.id}
            </a>
            <button
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md"
              onClick={() => handleDeleteUrl(shortUrl.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>

      <div className="mb-8">
        <input
          type="text"
          className="border border-gray-300 px-2 py-1 rounded-md w-full"
          placeholder="Enter a long URL"
          value={longUrl}
          onChange={handleLongUrlChange}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleShortenUrl}
        >
          Shorten URL
        </button>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-2">Short URLs:</h2>
        {renderShortUrls()}
      </div>
    </div>
  );
};

export default App;
