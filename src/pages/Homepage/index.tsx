import React from "react";
import styled from "styled-components";
import banner from "../../images/banner.jpg";
import Advantages from "./Advantages";
import CategoryItems from "./CategoryItems";
import Brands from "./Brands";

const BannerDiv = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  margin: 1.5rem auto 0 auto;
`;

const Banner = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

const Homepage = () => {
  return (
    <>
      <BannerDiv>
        <Banner src={banner} alt="banner" />
      </BannerDiv>
      <Advantages />
      <CategoryItems categoryName="Popular Products" />
      <CategoryItems categoryName="New arrived" />
      <CategoryItems categoryName="Recommended" />
      <Brands />
    </>
  );
};

export default Homepage;
