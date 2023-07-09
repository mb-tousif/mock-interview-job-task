import React, { useContext, useState } from 'react';
import UrlContext from '../Context/UrlContext';
import generateId from '../utils/generateId';

const EditPage: React.FC = () => {
  const { urls, deleteUrl, updateUrl } = useContext(UrlContext);
  const [editedLongUrl, setEditedLongUrl] = useState(`http://example.com/${generateId(10)}`);

  const handleDelete = (id: string) => {
    deleteUrl(id);
  };

  const handleLongUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedLongUrl(`http://example.com/${generateId(10)}${e.target.value}`);
  };

  const handleUpdate = (id: string) => {
    updateUrl(id, editedLongUrl);
    setEditedLongUrl('');
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">List of Short URLs:</h2>
      {urls.map((url) => (
        <div
          key={url.shortUrl}
          className="bg-white rounded-md p-4 shadow-md mb-4"
        >
          <p className="text-lg">Short URL: {url.shortUrl}</p>
          <p className="text-lg">Long URL: {url.longUrl}</p>
          <input
            type="text"
            value={editedLongUrl}
            onBlur={handleLongUrlChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mt-4"
          />
          <button
            onClick={() => handleUpdate(url.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mt-2"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(url.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default EditPage;
