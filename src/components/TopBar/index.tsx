import React, { useRef } from "react";
import styled from "styled-components";
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

const Wrapper = styled.div`
  height: 6.8rem;
  width: ${({ theme }) => theme.wrapperWidth};
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Main = styled.div`
  height: 6.8rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
`;

const LogoBox = styled.div`
  height: 100%;
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const InputBox = styled.div`
  height: 100%;
  width: 64rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  width: 31rem;
`;

const StyledInput = styled.input`
  height: 3.8rem;
  width: 40rem;
  background: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.secondary};
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-top-left-radius: 0.37rem;
  border-bottom-left-radius: 0.37rem;
  transition: box-shadow 0.15s ease-in-out;
  padding-left: 1.5rem;

  &:focus {
    box-shadow: 0 0 3px ${({ theme }) => theme.color.primaryLight};
    outline-offset: 0;
    outline: none;
    transition: box-shadow 0.15s ease-in-out;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.light};
    font-size: 1.2rem;
  }
`;

const LoginButton = styled.button`
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  height: 3.75rem;
  width: 6.7rem;
  background: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 1rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background 0.05s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    transition: background 0.05s ease-in-out;
  }

  &:focus {
    outline-offset: 0;
    outline: none;
  }
`;

const SignUpButton = styled(LoginButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  border-color: ${({ theme }) => theme.color.primary};
  width: 8.1rem;
  transition: background 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    transition: background 0.1s ease-in-out;
  }
`;

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  height: 3.8rem;
  width: 4rem;
  border-top-right-radius: 0.37rem;
  border-bottom-right-radius: 0.37rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.1s ease-in-out, color 0.15s ease-in-out;

  &:focus {
    outline-offset: 0;
    outline: none;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primaryDark};
  }
`;

const ItemCounterBox = styled.div`
  width: 2.2rem;
  height: 2rem;
  position: absolute;
  top: -0.3rem;
  right: -1rem;
  border: none;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.red};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemNumber = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

const Circle = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  position: relative;
  cursor: pointer;
`;

const UserIcon = styled.img`
  width: 2.1rem;
  height: 2.1rem;
  filter: grayscale(90%);
  cursor: pointer;
  transition: filter 0.1s ease-in-out;
  user-select: none;

  &:hover {
    filter: grayscale(0);
    transition: filter 0.1s ease-in-out;
  }
`;

const HearthIcon = styled(UserIcon)`
  margin-top: 0.2rem;
`;

const CartIcon = styled(UserIcon)`
  margin-right: 0.35rem;
`;

const SearchIcon = styled.img`
  width: 4rem;
  height: 3.5rem;
`;

const TopBar = () => {
  const history = useHistory();
  const dropdownRef = useRef<HTMLDivElement>(document.createElement("div"));
  const handleClick = (path: string) => {
    history.push(path);
  };
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);
  const toggleActive = () => setIsActive(!isActive);
  const { isLoaded, isEmpty } = useSelector(
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
              <Circle>
                <CartIcon src={cartIcon} alt="cart" />
                <ItemCounterBox>
                  <ItemNumber>0</ItemNumber>
                </ItemCounterBox>
              </Circle>
              <Circle>
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
