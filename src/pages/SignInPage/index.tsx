import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import styled from "styled-components";
import * as routes from "../../constans/routes";
import { useHistory } from "react-router-dom";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import passwordIcon from "../../images/passwordIcon.png";
import emailIcon from "../../images/email.png";

const Main = styled.div`
  width: 100%;
  height: 57rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInComponent = styled.div`
  height: 40.4rem;
  width: 38rem;
  padding: 0 1.875rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: bold;
`;

const StyledSpan = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const FacebookButton = styled.button`
  width: 100%;
  height: 4rem;
  background: #405d9d;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:hover {
    background: #16429f;
    transition: background 0.1s ease-in-out;
  }

  &:focus {
    outline-offset: 0;
    outline: none;
  }
`;

const Image = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1rem;
`;

const Icon = styled(Image)`
  margin: 0;
`;

const EmailIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
`;

const GoogleButton = styled(FacebookButton)`
  background: #ff7575;

  &:hover {
    background: #fc5252;
  }
`;

const StyledInput = styled.input`
  height: 3.8rem;
  width: calc(100% - 4rem);
  background: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.secondary};
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-top-right-radius: 0.37rem;
  border-bottom-right-radius: 0.37rem;
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
    font-size: 1.5rem;
  }
`;

const IconBox = styled.div`
  background-color: #e4e4e4;
  height: 3.8rem;
  width: 4rem;
  border-top-left-radius: 0.37rem;
  border-bottom-left-radius: 0.37rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-right: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  width: 100%;
  height: 3.8rem;
  align-items: center;
  display: flex;
`;

const RadioInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
`;

const RadioInput = styled.input`
  width: 1.7rem;
  height: 1.7rem;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 1rem;
`;

const LoginButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.primary};
  height: 3.75rem;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  width: 100%;
  transition: background 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    transition: background 0.1s ease-in-out;
  }
`;

interface LoginData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const signIn = async () => {
    try {
      await firebase.login({
        email,
        password,
      });
      history.push(routes.HOME);
    } catch (e) {
      await alert(e.message);
    }
  };

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") await signIn();
  };

  return (
    <Main>
      <SignInComponent onKeyUp={handleKeyPress}>
        <Title>Sign in</Title>
        <FacebookButton>
          <StyledSpan>
            <Image src={facebook} alt="google" /> Sign in with Facebook
          </StyledSpan>
        </FacebookButton>
        <GoogleButton>
          <StyledSpan>
            <Image src={google} alt="google" /> Sign in with Google
          </StyledSpan>
        </GoogleButton>
        <InputBox>
          <IconBox>
            <EmailIcon src={emailIcon} alt="search" />
          </IconBox>
          <StyledInput
            type="text"
            placeholder="Email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </InputBox>
        <InputBox>
          <IconBox>
            <Icon src={passwordIcon} alt="search" />
          </IconBox>
          <StyledInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </InputBox>
        <RadioInputBox>
          <RadioInput type="checkbox" id="remember" value="remember" />
          <StyledLabel htmlFor="remember">Remember</StyledLabel>
        </RadioInputBox>
        <LoginButton onClick={signIn}>Login</LoginButton>
      </SignInComponent>
    </Main>
  );
};

export default SignInPage;
