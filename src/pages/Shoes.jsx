import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HashLoader } from 'react-spinners';

const Shoes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        // Filter the data to include only products related to shoes
        const shoeData = response.data.filter((item) =>
          item.category.name.toLowerCase().includes('shoes')
        );
        setData(shoeData);
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

  // Render the fetched data
  return (
    <>
      <h1 className="text-center text-3xl font-extrabold mt-6">Trending Shoes...</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {data?.map((el, i) => (
          <div key={i} className="shadow-2xl text-center p-4 border rounded-md">
            <img src={el.images[0]} alt={el.title} className="h-40 w-full object-cover mb-4" />
            <h1 className="font-bold">Title: {el.title}</h1>
            <h1 className="text-sm text-gray-600">Description: {el.description}</h1>
            <h1 className="text-lg font-semibold">Price: ${el.price}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shoes;