import React, { useEffect, useState } from 'react'
import { Link, Route ,Routes} from 'react-router-dom'
import PosterData from './Poster1'
import axios from 'axios'

const HomePage = () => {

  const [data,setData] = useState([])
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(true)
  const [limit,setLimit]=useState(5)
  const initial = 0
  //fetching data just an example not the real data
 
  useEffect(()=>{
    axios.get(`https://api.escuelajs.co/api/v1/products`).then((res)=>{
      setData(res.data.slice(initial,limit))
      setLoading(false)
      // console.log(res.data)
    })
    .catch((error)=>{
      console.log('some error is just happend : ',error)
      setError(error)
    })
  },[])
  console.log(data)

  if(loading) return <p>loading....</p>
  if(error) return <p>some error happend</p>

  return (
  <>
  <div className='grid justify-center '>
  <h1 className='text-4xl bold font-extrabold '>More to Rack, easier and faster.</h1>
   <button className='mt-5 p-1 text-gray-500  bg-bl border-2 border-blue-700'>Sign In or Create an Account</button>
  </div>

<div>
  <Link to={'/API'}>
  <img src='/poster.png' className='h-56 w-full mt-4' alt="60% off poster" srcset="" /></Link>
</div>

<div className='mt-10'>
  <Link to={'/ShoePoster'}>
  <img src="poster2.png" alt="" srcset=""className='w-full h-' /></Link>
</div>


<hr />

<h1 className='text-3xl font-extrabold'>Top Brands you'll love...</h1>
  <div className='flex gap-4 mt-6 justify-center items-center text-center '>
    <button className='border-4 border-black bg-black text-white '>Previous</button>
    {data?.map((el,i)=>(
         
      <div key={i} className='shadow-2xl h-96 w-56 '  >
        <img src={el.images} className='' alt="" srcset="" />
        <h1 > Title : {el.title}</h1>
        <h1> Description : {el.slug}</h1>
        <h1>Price $ :{el.price}</h1>
      </div>
    ))}
  <button className='border-4 border-black bg-black text-white ' onClick={
    ()=>{
      setData(data.slice(initial+5,limit+5))
    }
  }>Next</button>
  </div>

  <Routes>
    <Route path='/API' element={<PosterData/>}/>
  </Routes>
  </>
  )
}

export default HomePage