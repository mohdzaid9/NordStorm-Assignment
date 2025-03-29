import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0); // Track the current page
  const limit = 6; // Number of items per page

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data
    axios
      .get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
        console.log(res.data.products);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log('Some error just happened: ', error);
      });
  }, [page]); // Re-fetch data whenever the page changes

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <HashLoader color="#000000" size={50} />
      </div>
    );

  if (error)
    return (
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/losing-internet-connection-on-tablet-illustration-download-in-svg-png-gif-file-formats--page-not-found-oops-error-404-need-support-web-issues-pack-people-illustrations-6359973.png"
        alt="Error"
      />
    );

  return (
    <>
      <h1 className="text-center text-3xl font-extrabold">All Products</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {data?.map((el, i) => (
          <div key={i} className="shadow-2xl text-center p-4 border rounded-md">
            <img src={el.thumbnail} alt={el.title} className="h-40 w-full object-cover mb-4" />
            <h1 className="font-bold">Title: {el.title}</h1>
            <h1 className="text-sm text-gray-600">Description: {el.description}</h1>
            <h1 className="text-lg font-semibold">Price: ${el.price}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))} // Decrease page, but not below 0
          disabled={page === 0} // Disable on the first page
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev + 1)} // Increase page
          disabled={data.length < limit} // Disable if fewer than 6 items are returned
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AllProducts;