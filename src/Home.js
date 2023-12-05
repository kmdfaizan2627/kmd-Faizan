import React from "react";
import Navbar from "./Pages/Navbar";
import Announcement from "./Pages/Announcement"
import Slider from "./Pages/Slider";
import Nextpage from "./Pages/Nextpage";
import Nextspage from "./Pages/Nextspage";
import Newletter from "./Pages/Newletter"
import Footer from "./Pages/Footer"
const Home =()=>{
  return(
  <div>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Nextpage/>
    <Nextspage/>
    <Newletter/>
    <Footer/>

   
    
  </div>
  )
}
export default Home;



