import React from 'react'

const Navbar = () => {
  return (
<>

<div className=' h-9 bg-blue-500' >
    <p className='text-center text-white'>Free shipping on most orders $89+. Pick up select orders in stores.  Learn More</p>
</div>

   <nav>
    <img className='size-40 h-28'  src="https://rb.gy/vu0wt7" alt="Nordstorm logo" />
    <input className='border-solid border-2 w-2/4 h-10 border-black pl-5' type="search" placeholder='Search for products or brands...' />
   </nav>


</>
  )
}

export default Navbar