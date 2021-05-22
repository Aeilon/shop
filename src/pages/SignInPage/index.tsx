import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import * as routes from "../../constans/routes";
import { useHistory } from "react-router-dom";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import passwordIcon from "../../images/passwordIcon.png";
import emailIcon from "../../images/email.png";
import {
  Main,
  Title,
  Icon,
  StyledInput,
  InputBox,
  StyledSpan,
  RadioInputBox,
  RadioInput,
  IconBox,
  LoginButton,
  Image,
  EmailIcon,
  FacebookButton,
  GoogleButton,
  StyledLabel,
  SignInComponent,
} from "./style";

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

  type Site =
    | "facebook"
    | "google"
    | "twitter"
    | "github"
    | "microsoft.com"
    | "apple.com"
    | "yahoo.com";

  const signInWith = async (site: Site) => {
    try {
      await firebase.login({
        provider: site,
        type: "popup",
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
        <FacebookButton onClick={() => signInWith("facebook")}>
          <StyledSpan>
            <Image src={facebook} alt="google" /> Sign in with Facebook
          </StyledSpan>
        </FacebookButton>
        <GoogleButton onClick={() => signInWith("google")}>
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
