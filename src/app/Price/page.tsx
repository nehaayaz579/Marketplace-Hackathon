
import React from "react";
import PriceSection from "../component/PriceComponent/priceSection";
import Card from "../component/PriceComponent/card";
import Logo from "../component/PriceComponent/logo";
import Faqs from "../component/PriceComponent/faqs";
import FreeTrials from "../component/PriceComponent/freeTrials";
import Header from "../component/Header";
import Footer from "../component/Footer";


const Price = () => {
  return (
    <div>
      <Header/>
      <PriceSection />
      <Card />
      <Logo />
      <Faqs />
      <FreeTrials/>
      <Footer/>
    </div>
  );
};

export default Price;
