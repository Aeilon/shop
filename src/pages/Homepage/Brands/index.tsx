import React from "react";
import facebookLogo from "../../../images/facebookLogo.png";
import googleLogo from "../../../images/googleLogo.png";
import linkedinLogo from "../../../images/linkedinLogo.png";
import philipsLogo from "../../../images/philipsLogo.png";
import amazonLogo from "../../../images/amazonLogo.png";
import logitechLogo from "../../../images/logitechLogo.png";
import { Main, Title, TitleBox, BrandsBox, Logo } from "./style";

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
