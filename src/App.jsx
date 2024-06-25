import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import headPhone from "./assets/hero/headphone.png";
import smartWatch from "./assets/category/smartwatch2-removebg-preview.png";
import Blog from './components/Blog/Blog';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import Aos from "aos"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 jan to 28 jan",
  image: headPhone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectuler adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37"
}

const BannerData2= {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 jan to 28 jan",
  image: smartWatch,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectuler adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f"
}

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    Aos.init(
      {
        duration: 2000,
        easing: "ease-in-sine",
        delay: 100, 
        offset: 100
      }
    )
    Aos.refresh()
  }, [])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blog />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App;
