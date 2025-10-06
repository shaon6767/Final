import Header from "./component/Header"
import { useContext, useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Products from "./component/Products";
import { ApiData } from "./component/ContextApi";
import Latest from "./component/Latest";
import Trending from "./component/Trending";
import TrendingProducts from "./component/TrendingProducts";
import Category from "./component/Category";
import Footer from "./component/Footer";


function App() {

  let data = useContext(ApiData)
  
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>
      <Products/>
      <Latest/>
      <Trending/>
      <TrendingProducts/>
      <Category/>
      <Footer/>
    </>
  )
}

export default App
