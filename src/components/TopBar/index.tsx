import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import search from "../../images/search.png";

const Wrapper = styled.div`
  height: 6.8rem;
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Main = styled.div`
  height: 6.8rem;
  width: 100%;
  border-bottom: 1px solid #ced4da;
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
  background: white;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-top-left-radius: 0.37rem;
  border-bottom-left-radius: 0.37rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding-left: 1.5rem;

  &:focus {
    box-shadow: 0 0 3px #5f89f0;
    outline-offset: 0px;
    outline: none;
  }

  &::placeholder {
    color: #ced4da;
    font-size: 1.2rem;
  }
`;

const LoginButton = styled.button`
  color: #3167eb;
  border: 1px solid #3167eb;
  height: 3.75rem;
  width: 6.7rem;
  background: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 1rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background 0.05s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    background: #376cec;
    color: white;
    transition: background 0.05s ease-in-out, color 0.15s ease-in-out;
  }
`;

const SignUpButton = styled(LoginButton)`
  color: white;
  background-color: #3167eb;
  border-color: #3167eb;
  width: 8.1rem;

  &:hover {
    background-color: #376bf1;
  }
`;

const SearchButton = styled.button`
  background-color: #3167eb;
  height: 4.2rem;
  width: 4.5rem;
  border-top-right-radius: 0.37rem;
  border-bottom-right-radius: 0.37rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    border: none;
    outline-offset: 0px;
    outline: none;
  }

  &:hover {
    background: #376cec;
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
