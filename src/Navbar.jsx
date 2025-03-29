import React from 'react'

const Navbar = () => {
  return (
    <div>
         <div>
      
      <h3 className="bg-orange-600 h-10 ">
        <p className="text-center justify-around">
        Now through March 31: EXTRA 25% OFF CLEARANCE! All sales final. Shop Clearance.Search
        </p>
      </h3>
     </div>
     
     <nav className="flex justify-between items-center">
      <Link to={'/'}><img className="w-40 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIq5brediqrjhyGL4LMO62mv_WN-4p_l-fkA&s" alt="" srcset="" /></Link>
      <input type="search" placeholder="       browse products....." className="w-2/3 h-11 border-2 border-gray-700 focus:border-pink-600 ... " />
     <Link to={'/SignIn'}><img src="https://academy.allaboutbirds.org/wp-content/uploads/2022/03/ba-signin.png" alt="" srcset="" className="w-40" /></Link>
     </nav>
     <br />
     <hr  />

    </div>
  )
}

export default Navbar