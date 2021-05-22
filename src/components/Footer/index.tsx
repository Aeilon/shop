import React from "react";
import playmarket from "../../images/playmarket.png";
import appstore from "../../images/appstore.png";
import {
  BottomFooter,
  BottomWrapper,
  ButtonBox,
  ShopButton,
  Wrapper,
  ListHeader,
  ListItem,
  StyledList,
  StyledLink,
  StyledSpan,
  Main,
} from "./style";

const Footer = () => {
  return (
    <Main>
      <Wrapper>
        <StyledList>
          <ListHeader>Brands</ListHeader>
          <ListItem>Adidas</ListItem>
          <ListItem>Puma</ListItem>
          <ListItem>Reebok</ListItem>
          <ListItem>Nike</ListItem>
        </StyledList>
        <StyledList>
          <ListHeader>Company</ListHeader>
          <ListItem>About us</ListItem>
          <ListItem>Career</ListItem>
          <ListItem>Find a store</ListItem>
          <ListItem>Rules and terms</ListItem>
          <ListItem>Sitemap</ListItem>
        </StyledList>
        <StyledList>
          <ListHeader>Help</ListHeader>
          <ListItem>Contact us</ListItem>
          <ListItem>Money refund</ListItem>
          <ListItem>Order status</ListItem>
          <ListItem>Shipping info</ListItem>
          <ListItem>Open dispute</ListItem>
        </StyledList>
        <StyledList>
          <ListHeader>Account</ListHeader>
          <ListItem>User Login</ListItem>
          <ListItem>User register</ListItem>
          <ListItem>Account Setting</ListItem>
          <ListItem>My Orders</ListItem>
        </StyledList>
        <StyledList>
          <ListHeader>Resources</ListHeader>
          <ListItem>Documents</ListItem>
          <ListItem>Webinars</ListItem>
          <ListItem>Product samples</ListItem>
        </StyledList>
      </Wrapper>
      <BottomFooter>
        <BottomWrapper>
          <StyledSpan>
            ©2020 Company name <StyledLink to="">Privacy policy</StyledLink>
            <StyledLink to="">Terms of use</StyledLink>
          </StyledSpan>
          <ButtonBox>
            <ShopButton to="">
              <img src={appstore} alt="appstore" />
            </ShopButton>
            <ShopButton to="">
              <img src={playmarket} alt="playmarket" />
            </ShopButton>
          </ButtonBox>
        </BottomWrapper>
      </BottomFooter>
    </Main>
  );
};

export default Footer;
