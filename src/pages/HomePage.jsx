import React, { useEffect, useState } from 'react'
import { Link, Route ,Routes} from 'react-router-dom'
import PosterData from './Poster1'
import axios from 'axios'

const HomePage = () => {

  const [data,setData] = useState([])
  // const [error,setError]=useState(null)
  // const [loading,setLoading]=useState(true)
  // //fetching data just an example not the real data
  // useEffect(()=>{
  //   axios.get('https://api.escuelajs.co/api/v1/products').then((res)=>{
  //     setData(res.data)
  //     setLoading(false)
  //     console.log(res.data)
  //   })
  //   .catch((error)=>{
  //     console.log('some error is just happend : ',error)
  //     setError(error)
  //   })
  // },[])

  // if(loading) return <p>loading....</p>
  // if(error) return <p>some error happend</p>

  const getData=async()=>{
    let response = await fetch('https://api.escuelajs.co/api/v1/products')
    let finalData = await response.json()
    setData(finalData)
  }
getData()
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

{/* <div className='mt-10'>
  <Link to={'/ShoePoster'}>
  <img src="poster2.png" alt="" srcset=""className='w-full h-' /></Link>
</div> */}

<hr />
<hr />

{data.map((el)=>{
  <div key={el.i}>
    <h1>{el.title}</h1>
  </div>
})}

  <Routes>
    <Route path='/API' element={<PosterData/>}/>
  </Routes>
  </>
  )
}

export default HomePage