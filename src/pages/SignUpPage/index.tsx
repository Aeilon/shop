import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import { useFirebase } from "react-redux-firebase";
import * as routes from "../../constans/routes";
import {
  Main,
  StyledLabel,
  StyledInput,
  RadioInput,
  RadioInputBox,
  StyledSpan,
  BigInputBox,
  StyledLink,
  InputsBox,
  RadioInputsBox,
  SmallInputBox,
  Label,
  Title,
  RegisterButton,
  FormText,
  Text,
  LoginDiv,
  SignUpComponent,
} from "./style";

interface UserData {
  email: string;
  password: string;
  name: string;
  lastName: string;
  gender: string;
  city: string;
  country: string;
}

const SignUpPage: React.FC = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    name: "",
    lastName: "",
    gender: "",
    city: "",
    country: "",
  });

  const { email, password, name, lastName, gender, city, country } = userData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const signUp = async () => {
    try {
      await firebase.createUser(
        {
          email,
          password,
        },
        { email, name, lastName, gender, city, country }
      );
      history.push(routes.HOME);

      alert("You have successfully created your account.");
    } catch (e) {
      await alert(e.message);
    }
  };

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") await signUp();
  };

  return (
    <Main>
      <SignUpComponent onKeyUp={handleKeyPress}>
        <Title>Sign up</Title>
        <InputsBox>
          <SmallInputBox>
            <Label>First name</Label>
            <StyledInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </SmallInputBox>
          <SmallInputBox>
            <Label>Last name</Label>
            <StyledInput
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </SmallInputBox>
        </InputsBox>
        <BigInputBox>
          <Label>Email</Label>
          <StyledInput
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </BigInputBox>
        <FormText>We'll never share your email with anyone else.</FormText>
        <RadioInputsBox>
          <RadioInputBox>
            <RadioInput
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            <StyledLabel htmlFor="male">Male</StyledLabel>
          </RadioInputBox>
          <RadioInputBox>
            <RadioInput
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            <StyledLabel htmlFor="female">Female</StyledLabel>
          </RadioInputBox>
        </RadioInputsBox>
        <InputsBox>
          <SmallInputBox>
            <Label>City</Label>
            <StyledInput
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </SmallInputBox>
          <SmallInputBox>
            <Label>Country</Label>
            <StyledInput
              type="text"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </SmallInputBox>
        </InputsBox>
        <InputsBox>
          <SmallInputBox>
            <Label>Create password</Label>
            <StyledInput
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </SmallInputBox>
          <SmallInputBox>
            <Label>Repeat password</Label>
            <StyledInput type="password" />
          </SmallInputBox>
        </InputsBox>
        <RegisterButton onClick={() => signUp()}>Register</RegisterButton>
        <Text>
          By clicking the 'Sign Up' button, you confirm that you accept our
          Terms of use and Privacy Policy.
        </Text>
        <LoginDiv>
          <StyledSpan>
            Have an account?<StyledLink to="">Log In</StyledLink>
          </StyledSpan>
        </LoginDiv>
      </SignUpComponent>
    </Main>
  );
};

export default SignUpPage;
