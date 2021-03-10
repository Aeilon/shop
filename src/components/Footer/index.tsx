import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import playmarket from "../../images/playmarket.png";
import appstore from "../../images/appstore.png";

const Main = styled.div`
  height: 33rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

const Wrapper = styled.div`
  height: 26rem;
  width: ${({ theme }) => theme.wrapperWidth};
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 2.3rem;
  padding-left: 0;
`;

const ListHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

const ListItem = styled.li`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.8rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

const BottomFooter = styled.div`
  height: 7rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

const BottomWrapper = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.wrapperWidth};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: 400;
  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`;

const ButtonBox = styled.div`
  height: 100%;
  width: 21rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShopButton = styled(Link)`
  img {
    height: 3rem;
    width: 10rem;
  }
`;

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
