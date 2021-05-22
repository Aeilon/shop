import styled, { css } from "styled-components";

export const TopBackground = styled.div`
  height: 16rem;
  width: 100%;
  background: #f8f9fa;
  border-top: 1px solid ${({ theme }) => theme.color.light};
  margin: 2rem 0;
`;

export const TitleBox = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
`;

export const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  width: 30rem;
  height: 108.4rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
`;

export const RightSection = styled.div`
  width: 88rem;
  display: flex;
  flex-direction: column;
`;

export const NumberOfItems = styled.p`
  font-size: 1.55rem;
  color: ${({ theme }) => theme.color.dark};
  font-weight: 500;
`;

export const MainBar = styled.div`
  height: 3.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonBox = styled.div`
  height: 100%;
  display: flex;
  width: 23.5rem;
  justify-content: space-between;
`;

export const ItemList = styled.div<{ view: string }>`
  ${({ view }) =>
    view === "large"
      ? css`
          width: 100%;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          margin-bottom: 3rem;
        `
      : css`
          width: 100%;
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
          grid-column-gap: 3.2rem;
          grid-row-gap: 1.6rem;
          margin-bottom: 3rem;
        `}
`;

export const Select = styled.select`
  height: 100%;
  width: 14.15rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.secondary};
  background: white;
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.37rem;
  transition: box-shadow 0.15s ease-in-out;
  padding-left: 1.5rem;

  &:focus {
    box-shadow: 0 0 3px ${({ theme }) => theme.color.primaryLight};
    outline-offset: 0;
    outline: none;
    transition: box-shadow 0.15s ease-in-out;
  }
`;

export const Option = styled.option`
  font-size: 1.5rem;
  font-weight: 400;
`;
