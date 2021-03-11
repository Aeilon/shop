import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  width: 100%;
  height: 80rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpComponent = styled.div`
  height: 65.5rem;
  width: 58rem;
  padding: 0 1.875rem;
  border: 1px solid ${({ theme }) => theme.color.light};
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

const InputsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8.25rem;
`;

const SmallInputBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.25rem;
  width: 26.7rem;
  justify-content: space-evenly;
`;

const BigInputBox = styled(SmallInputBox)`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3.8rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  font-size: 1.5rem;
  transition: box-shadow 0.15s ease-in-out;
  padding-left: 1rem;

  &:focus {
    box-shadow: 0 0 3px ${({ theme }) => theme.color.primaryLight};
    outline-offset: 0;
    outline: none;
    transition: box-shadow 0.15s ease-in-out;
  }

  &::placeholder {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.gray};
  }
`;

const Label = styled.p`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.4rem;
  font-weight: 400;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 1rem;
`;

const FormText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.grayLight};
  font-weight: 400;
`;

const RadioInputsBox = styled.div`
  width: 16rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RadioInputBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 7.5rem;
`;

const RadioInput = styled.input`
  width: 1.8rem;
  height: 1.8rem;
`;

const RegisterButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.primary};
  height: 3.75rem;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  width: 100%;
  transition: background 0.1s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    transition: background 0.1s ease-in-out, color 0.15s ease-in-out;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.color.grayLight};
  font-weight: 400;
`;

const LoginDiv = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-size: 1.4rem;
  margin-left: 0.5rem;
  font-weight: 400;
  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

const StyledSpan = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 400;
`;

const SignUpPage = () => {
  return (
    <Main>
      <SignUpComponent>
        <Title>Sign up</Title>
        <InputsBox>
          <SmallInputBox>
            <Label>First name</Label>
            <StyledInput type="text" />
          </SmallInputBox>
          <SmallInputBox>
            <Label>Last name</Label>
            <StyledInput type="text" />
          </SmallInputBox>
        </InputsBox>
        <BigInputBox>
          <Label>Email</Label>
          <StyledInput type="text" />
        </BigInputBox>
        <FormText>We'll never share your email with anyone else.</FormText>
        <RadioInputsBox>
          <RadioInputBox>
            <RadioInput type="radio" id="male" name="gender" value="male" />
            <StyledLabel htmlFor="male">Male</StyledLabel>
          </RadioInputBox>
          <RadioInputBox>
            <RadioInput type="radio" id="female" name="gender" value="female" />
            <StyledLabel htmlFor="female">Female</StyledLabel>
          </RadioInputBox>
        </RadioInputsBox>
        <InputsBox>
          <SmallInputBox>
            <Label>City</Label>
            <StyledInput type="text" />
          </SmallInputBox>
          <SmallInputBox>
            <Label>Country</Label>
            <StyledInput type="text" />
          </SmallInputBox>
        </InputsBox>
        <InputsBox>
          <SmallInputBox>
            <Label>Create password</Label>
            <StyledInput type="text" />
          </SmallInputBox>
          <SmallInputBox>
            <Label>Repeat password</Label>
            <StyledInput type="text" />
          </SmallInputBox>
        </InputsBox>
        <RegisterButton>Register</RegisterButton>
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
