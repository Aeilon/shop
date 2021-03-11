import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import search from "../../images/search.png";

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
  width: 26.5rem;
`;

const StyledInput = styled.input`
  height: 3.8rem;
  width: 40rem;
  background: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.grayDark};
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
  transition: background 0.05s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    transition: background 0.05s ease-in-out, color 0.15s ease-in-out;
  }
`;

const SignUpButton = styled(LoginButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  border-color: ${({ theme }) => theme.color.primary};
  width: 8.1rem;
  transition: background 0.1s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    transition: background 0.1s ease-in-out, color 0.15s ease-in-out;
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
    border: none;
    outline-offset: 0px;
    outline: none;
    transition: background 0.1s ease-in-out, color 0.15s ease-in-out;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primaryDark};
  }
`;
const SearchIcon = styled.img`
  width: 4rem;
  height: 3.5rem;
`;

const TopBar = () => {
  return (
    <Main>
      <Wrapper>
        <LogoBox>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </LogoBox>
        <InputBox>
          <StyledInput type="text" placeholder="Search" />
          <SearchButton>
            <SearchIcon
              src={search}
              style={{ width: "4rem", height: "3.5rem" }}
              alt="search"
            />
          </SearchButton>
        </InputBox>
        <ButtonBox>
          <LoginButton>Login</LoginButton>
          <SignUpButton>Sign up</SignUpButton>
        </ButtonBox>
      </Wrapper>
    </Main>
  );
};

export default TopBar;