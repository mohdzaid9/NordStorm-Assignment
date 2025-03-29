import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

const WomenPoster = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0); 
  const limit = 8; // Number of items per page

  useEffect(() => {
    setLoading(true); 
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log('Some error just happened: ', error);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <HashLoader color="#000000" size={50} />
      </div>
    );

  if (error) return <p>Some error happened</p>;

  // Calculate the items to display based on the current page
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid justify-center grid-cols-4 gap-10 mt-10">
        {paginatedData?.map((el, i) => (
          <div key={i} className="shadow-2xl text-center p-4 border rounded-md">
            <img src={el.images} alt={el.title} className="h-46 w-full object-cover mb-4" />
            <h1 className="font-bold">Title: {el.title}</h1>
            <h1 className="text-sm text-gray-600">Description: {el.slug}</h1>
            <h1 className="text-lg font-semibold">Price: ${el.price}</h1>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-6 justify-center items-center text-center">
        <button
          className="border-4 border-black bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))} // Decrease page, but not below 0
          disabled={page === 0} // Disable on the first page
        >
          Previous
        </button>
        <button
          className="border-4 border-black bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev + 1)} // Increase page
          disabled={endIndex >= data.length} // Disable if there are no more items
        >
          Next
        </button>
      </div>
    </>
  );
};

export default WomenPoster;