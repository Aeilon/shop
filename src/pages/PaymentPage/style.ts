import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledInput,
  SearchButton,
  InputBox,
} from "../../components/TopBar/style";

export const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: auto;
  margin: 0 auto 5rem auto;
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  border: 1px solid ${({ theme }) => theme.color.light};
  background: white;
  border-radius: 0.5rem;
  min-height: 15rem;
  width: 72%;
`;

export const RightSection = styled.div`
  height: 100%;

  width: 26%;
  display: flex;
  flex-direction: column;
`;

export const CouponBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  height: 12rem;
  background: white;
  width: 100%;
  padding: 1.875rem;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 400;
    font-size: 1.53rem;
  }
`;

export const CouponInput = styled(StyledInput)`
  width: 70%;
  text-transform: uppercase;
  &:disabled {
    color: #00b517;
    font-weight: bold;
  }

  &::placeholder {
    font-size: 1.4rem;
  }
`;

export const ApplyButton = styled(SearchButton)`
  width: 30%;
  p {
    color: white;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

export const CouponInputBox = styled(InputBox)`
  width: 100%;
  height: 3.8rem;
  margin-top: 0.5rem;
`;

export const TextDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.2rem;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
  }

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    p:last-of-type {
      font-weight: bold;
    }
  }

  &:nth-child(2) {
    p:last-of-type {
      color: red;
    }
  }
`;

export const PaymentBox = styled.div`
  height: 26.8rem;
  width: 100%;
  background: white;
  margin-top: 2.5rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
`;

export const Line = styled.hr`
  margin-top: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
`;

export const ImagesBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto 0 auto;
  img {
    width: auto;
    height: 80%;
  }
`;

export const BlueButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.primary};
  height: 3.75rem;
  font-size: 1.5rem;
  margin-top: 1rem;
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

export const WhiteButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.light};
  height: 3.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray};
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  transition: border 0.1s ease-in-out;
  margin-top: 0.5rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.secondary};
    transition: border 0.1s ease-in-out;
  }
`;

export const BlurComponent = styled.div<{
  display: boolean;
}>`
  width: 100%;
  height: 120vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ display }) =>
    display
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;

export const BlurContent = styled.div`
  height: 85vh;
  padding: 1.875rem;
  border-radius: 0.5rem;
  width: 60%;
  display: flex;
  background: ${({ theme }) => theme.color.white};
`;

export const LeftSide = styled.div`
  width: 78rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const RightSide = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  display: flex;
  margin-top: 1.3rem;
  flex-direction: column;
  align-items: flex-start;
`;
export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: bold;
  line-height: 5.2rem;
`;

export const SuccessButton = styled.button`
  width: 100%;
  height: 4.5rem;
  margin-top: 2rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.5rem;
  background: #00b517;
  border: 1px solid #00b517;
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  transition: border 0.1s ease-in-out, background 0.1s ease-in-out;

  &:hover {
    background: #039814;
    border: 1px solid #039814;
    transition: border 0.1s ease-in-out, background 0.1s ease-in-out;
  }
`;

export const CloseButton = styled(FontAwesomeIcon)`
  font-size: 4rem;
  position: absolute;
  top: 16rem;
  right: 38.5rem;
  height: 4rem;
  color: lightgray;
  width: 4rem;
  cursor: pointer;
`;

export const PaymentOption = styled.div`
  width: 100%;
  height: 5.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  &:nth-child(2) {
    margin-top: 4.45rem;
  }

  label {
    font-size: 15px;
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;

export const PaymentImageBox = styled.div`
  height: 100%;
  width: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;

  img {
    height: 2rem;
    width: auto;
    margin-right: 0.5rem;
  }
`;

export const RadioInput = styled.input`
  width: 1.3rem;
  height: 1.3rem;
`;
