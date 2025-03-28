import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HashLoader } from 'react-spinners';

const Women = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0); // Track the current page
  const limit = 6; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        console.log(response.data); // Debugging: Log the API response
        // Shuffle the data to display random products
        const shuffledData = response.data.sort(() => 0.5 - Math.random());
        setData(shuffledData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle loading state
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <HashLoader color="#000000" size={50} />
      </div>
    );

  // Handle error state
  if (error)
    return (
      <img
        className="ml-96"
        src="https://cdni.iconscout.com/illustration/premium/thumb/losing-internet-connection-on-tablet-illustration-download-in-svg-png-gif-file-formats--page-not-found-oops-error-404-need-support-web-issues-pack-people-illustrations-6359973.png"
        alt="Error"
      />
    );

  // Calculate the items to display based on the current page
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <h1 className="text-center text-3xl font-extrabold mt-6">Women Products....</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {paginatedData?.map((el, i) => (
          <div key={i} className="shadow-2xl text-center p-4 border rounded-md">
            <img src={el.images[0]} alt={el.title} className="h-40 w-full object-cover mb-4" />
            <h1 className="font-bold">Title: {el.title}</h1>
            <h1 className="text-sm text-gray-600">Description: {el.description}</h1>
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

export default Women;