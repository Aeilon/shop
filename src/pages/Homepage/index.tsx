import React from "react";
import banner from "../../images/banner.jpg";
import Advantages from "./Advantages";
import CategoryItems from "./CategoryItems";
import Brands from "./Brands";
import { Banner, BannerDiv } from "./style";

const Homepage = () => {
  return (
    <>
      <BannerDiv>
        <Banner src={banner} alt="banner" />
      </BannerDiv>
      <Advantages />
      <CategoryItems categoryTitle="Popular Products" categoryName="shoes" />
      <CategoryItems categoryTitle="New arrived" categoryName="smartphones" />
      <CategoryItems categoryTitle="Recommended" categoryName="smartphones" />
      <Brands />
    </>
  );
};

export default Homepage;
