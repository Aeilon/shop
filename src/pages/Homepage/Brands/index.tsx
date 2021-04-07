import React from "react";
import styled from "styled-components";
import facebookLogo from "../../../images/facebookLogo.png";
import googleLogo from "../../../images/googleLogo.png";
import linkedinLogo from "../../../images/linkedinLogo.png";
import philipsLogo from "../../../images/philipsLogo.png";
import amazonLogo from "../../../images/amazonLogo.png";
import logitechLogo from "../../../images/logitechLogo.png";

const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: 18rem;
  display: flex;
  flex-direction: column;
  margin: 4.5rem auto 4.5rem auto;
`;

const TitleBox = styled.div`
  height: 5.4rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.8rem;
`;

const BrandsBox = styled.div`
  display: flex;
  width: auto;
  height: 12.6rem;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  filter: grayscale(100%);
  transition: filter 2s ease-in-out;

  &:hover {
    filter: grayscale(0);
    transition: filter 0.15s ease-in-out;
  }
`;

export default () => {
  return (
    <Main>
      <TitleBox>
        <Title>Our brands</Title>
      </TitleBox>
      <BrandsBox>
        <Logo src={logitechLogo} alt="logitech" />
        <Logo src={philipsLogo} alt="philips" />
        <Logo src={linkedinLogo} alt="linkedin" />
        <Logo src={amazonLogo} alt="amazon" />
        <Logo src={facebookLogo} alt="facebook" />
        <Logo src={googleLogo} alt="google" />
      </BrandsBox>
    </Main>
  );
};
