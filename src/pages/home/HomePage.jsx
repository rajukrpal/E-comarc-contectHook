// import React from "react";
// import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
// import Loader from "../../components/loader/Loader";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
// import myContext from "../../context/myContext";

function HomePage() {
  // const context = useContext(myContext);
  // const name = context;
  return (
    <>
      <Layout>
        <HeroSection />
        <Category />
        <HomePageProductCard />
        <Track />
        <Testimonial />
        {/* <h1>{name}</h1> */}
        {/* <Loader/> */}
      </Layout>
    </>
  );
}

export default HomePage;
