// import React, { useState } from 'react'
// import { Button } from "@material-tailwind/react";
// import { Slider } from "@material-tailwind/react";
// function App() {
//   const [value,setvalue] = useState(20)
//   console.log(value);
//   const round = Math.round(value)
//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//     <Button>Add</Button>

//     <div className="flex w-96 flex-col gap-8">
//       <Slider color="blue" defaultValue={value} onChange={(e)=>setvalue(e.target.value)} />
//       {round}
//       <Slider color="red" defaultValue={50} />
//       <Slider color="green" defaultValue={50} />
//       <Slider color="amber" defaultValue={50} />
//     </div>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Navbar from './components/Navbar.jsx/Navbar'
import LandingPage from './components/Navbar.jsx/LandingPage'
import Footer from './components/footer/Footer'
import About from './components/About/About'
import Products from './components/cookies/CookiesItems'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cookies from './pages/Cookies'
import SingleCookie from './components/cookies/SingleCookie'
import LocationPage from './pages/LocationPage'
import Franchise from './components/Franchise/Franchise'
function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cookies' element={<Cookies/>}/>
            <Route path='/cookies/:id' element={<SingleCookie/>}/>
            <Route path='/location' element={<LocationPage/>}/>
            <Route path='/franchise' element={<Franchise/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App