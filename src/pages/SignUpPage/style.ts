import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
  width: 100%;
  height: 80rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpComponent = styled.div`
  height: 65.5rem;
  width: 58rem;
  padding: 0 1.875rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: bold;
  line-height: 5.2rem;
`;

export const InputsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8.25rem;
`;

export const SmallInputBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.25rem;
  width: 26.7rem;
  justify-content: space-evenly;
`;

export const BigInputBox = styled(SmallInputBox)`
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3.8rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  font-size: 1.5rem;
  transition: box-shadow 0.15s ease-in-out;
  padding-left: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.secondary};

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

export const Label = styled.p`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.4rem;
  font-weight: 400;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 1rem;
`;

export const FormText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.grayLight};
  font-weight: 400;
`;

export const RadioInputsBox = styled.div`
  width: 16rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RadioInputBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 7.5rem;
`;

export const RadioInput = styled.input`
  width: 1.8rem;
  height: 1.8rem;
`;

export const RegisterButton = styled.button`
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

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.color.grayLight};
  font-weight: 400;
`;

export const LoginDiv = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-size: 1.4rem;
  margin-left: 0.5rem;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

export const StyledSpan = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 400;
`;
