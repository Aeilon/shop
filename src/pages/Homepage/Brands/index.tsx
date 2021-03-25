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
  justify-content: space-around;
  align-items: center;
`;

export default () => {
  return (
    <Main>
      <TitleBox>
        <Title>Our brands</Title>
      </TitleBox>
      <BrandsBox>
        <img src={logitechLogo} alt="logitech" />
        <img src={philipsLogo} alt="philips" />
        <img src={linkedinLogo} alt="linkedin" />
        <img src={amazonLogo} alt="amazon" />
        <img src={facebookLogo} alt="facebook" />
        <img src={googleLogo} alt="google" />
      </BrandsBox>
    </Main>
  );
};
