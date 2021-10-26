import React, { useRef } from "react";
import * as routes from "../../constans/routes";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import userIcon from "../../images/userIcon.png";
import hearthIcon from "../../images/hearthIcon.png";
import cartIcon from "../../images/cartIcon.png";
import { useSelector } from "react-redux";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import DropDownMenu from "./DropdownMenu";
import CartMenu from "./CartMenu";
import {
  Wrapper,
  ButtonBox,
  Main,
  LoginButton,
  LogoBox,
  SearchButton,
  SignUpButton,
  SearchIcon,
  CartIcon,
  HearthIcon,
  InputBox,
  Circle,
  ItemCounterBox,
  ItemNumber,
  StyledInput,
  UserIcon,
} from "./style";

const TopBar = () => {
  const history = useHistory();
  const dropdownRef = useRef<HTMLDivElement>(document.createElement("div"));
  const cartRef = useRef<HTMLDivElement>(document.createElement("div"));
  const handleClick = (path: string) => {
    history.push(path);
  };
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);
  const [cartActive, setCartActive] = useDetectOutsideClick(cartRef);
  const toggleActive = () => setIsActive(!isActive);
  const toggleCart = () => setCartActive(!cartActive);
  const { isLoaded, isEmpty, cartItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  return (
    <Main>
      <Wrapper>
        <LogoBox>
          <img onClick={() => handleClick(routes.HOME)} src={logo} alt="logo" />
        </LogoBox>
        <InputBox>
          <StyledInput type="text" placeholder="Search" />
          <SearchButton>
            <SearchIcon src={search} alt="search" />
          </SearchButton>
        </InputBox>
        <ButtonBox>
          {!isEmpty && isLoaded ? (
            <>
              <Circle onClick={() => toggleCart()}>
                <CartIcon src={cartIcon} alt="cart" />

                <ItemCounterBox>
                  <ItemNumber>{cartItems.length}</ItemNumber>
                </ItemCounterBox>

                <CartMenu
                  cartActive={cartActive}
                  setCartActive={setCartActive}
                  cartRef={cartRef}
                />
              </Circle>
              <Circle onClick={() => handleClick("/favorites")}>
                <HearthIcon src={hearthIcon} alt="favourites" />
              </Circle>
              <Circle onClick={() => toggleActive()}>
                <UserIcon src={userIcon} alt="user" />

                {isActive && (
                  <DropDownMenu
                    setIsActive={setIsActive}
                    dropdownRef={dropdownRef}
                  />
                )}
              </Circle>
            </>
          ) : (
            <>
              <LoginButton onClick={() => handleClick(routes.SIGN_IN)}>
                Login
              </LoginButton>
              <SignUpButton onClick={() => handleClick(routes.SIGN_UP)}>
                Sign up
              </SignUpButton>
            </>
          )}
        </ButtonBox>
      </Wrapper>
    </Main>
  );
};

export default TopBar;
