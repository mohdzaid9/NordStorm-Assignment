import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const PosterData = () => {
 
  const [data,setData]=useState([])
  const [loading, setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then((res)=>{
     setData(res.data)
      setLoading(false)
      console.log(res.data)
    })
    .catch((error)=>{ 
      setError(error)
      setLoading(false)
      console.log('some error is just happend : ',error)
    })
  },[])

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <HashLoader color="#000000" size={50} />
      </div>)
  if(error) return <img src="https://cdni.iconscout.com/illustration/premium/thumb/losing-internet-connection-on-tablet-illustration-download-in-svg-png-gif-file-formats--page-not-found-oops-error-404-need-support-web-issues-pack-people-illustrations-6359973.png" alt="" srcset="" />
  console.log(data)
  return (

<>
     <div className='grid justify-center items-center '>
     <h1 className='text-4xl bold font-extrabold '>More to Rack, easier and faster.</h1>
     <Link to={'/SignIn'}><button className="mt-5 p-2 text-gray-500, bg-blue-700 text-white border-2 border-blue-700 rounded-md hover:bg-blue-800 ml-44">
      Sign In or Create an Account
    </button></Link>
     </div>
    <div>
      <div className='grid grid-cols-3 gap-4 mt-10'>
        {data?.map((item, index) => (
          <div key={index} className='shadow-2xl text-center  '>
            <img src={item.image} alt={item.title} className='h-96 w-56' />
            <h1>Title: {item.title}</h1>
            <h1>Description: {item.description}</h1>
            <h1>Price: ${item.price}</h1>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PosterData;