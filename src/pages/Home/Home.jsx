import React from "react";
import Banner from "./Components/Banner";
import Slider from "./Components/Slider";
import PopularMenu from "./Components/PopularMenu";
import Featured from "./Components/Featured/Featured";
import Testimonials from "./Components/Testimonials";
import {Helmet} from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restuarents</title>
      </Helmet>
      <Banner />
      <Slider />
      <PopularMenu />
      {/* <Featured /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
