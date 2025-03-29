import { Link, Route,Routes } from "react-router-dom"
import Sign from "./pages/Sign"
import Men from "./pages/Men"
import HomePage from "./pages/HomePage"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Shoes from "./pages/Shoes"
import PosterData from "./pages/PosterData"
import ShoePoster from "./pages/ShoePoster"
import WomenPoster from "./pages/WomenPoster"
import Footer from "./Footer"
import AllProducts from "./pages/AllProducts"

function App() {


  return (
    <>
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

      <div className="flex justify-evenly">
        <Link to={'/AllProducts'}>All Products</Link>
        <Link to={'/Men'}><p>Men</p></Link>
        <Link to={'/Women'}><p>Women</p></Link>
        <Link to={'/Kids'}><p>Kids</p></Link>
        <Link to={'/Shoes'}><p>Shoes</p></Link>
      </div>

        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/SignIn" element={<Sign/>}/>
        <Route path="/AllProducts" element={<AllProducts/>}/>
        <Route path="/Men"element={<Men/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Kids" element={<Kids/>}/>
        <Route path="/Shoes" element={<Shoes/>}/>
        <Route path='/PosterData' element={<PosterData/>}/>
        <Route path='/ShoePoster' element={<ShoePoster/>}/>
        <Route path='/WomenPoster' element={<WomenPoster/>}/>
        </Routes>
  
  <Footer/>
    </>
  )
}

export default App
