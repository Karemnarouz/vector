/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Navbar from './Navbar';
import Banner from './HomePage/Banner';
import Service from './HomePage/Service';
import Book_table from './Book_table';
import Featured_food from './HomePage/Featured_food';
import Our_blog from './HomePage/Our_blog';
import Sin_up from './HomePage/Sin_up';
import Cook from './HomePage/Cook';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cook />
      <Service />
      <Book_table />
      <Featured_food />
      <Our_blog />
      <Sin_up />
      <Footer />
      <ScrollToTop smooth viewBox="0 0 16 16" svgPath="M4.29289,4.2971 L8,0.59 L11.7071,4.2971 C12.0976,4.6876 12.0976,5.3208 11.7071,5.7113 C11.3166,6.10183 10.6834,6.10183 10.2929,5.7113 L9,4.4184 L9,14.0042 C9,14.55649 8.55228,15.0042 8,15.0042 C7.44772,15.0042 7,14.55649 7,14.0042 L7,4.4184 L5.70711,5.7113 C5.31658,6.10183 4.68342,6.10183 4.29289,5.7113 C3.90237,5.3208 3.90237,4.6876 4.29289,4.2971 Z" 
      style={{backgroundColor:"#f2745f"}}/>
    </div>
  )
}

export default HomePage;