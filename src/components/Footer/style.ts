import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
  height: 33rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

export const Wrapper = styled.div`
  height: 26rem;
  width: ${({ theme }) => theme.wrapperWidth};
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 2.3rem;
  padding-left: 0;
`;

export const ListHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 4rem;
`;

export const ListItem = styled.li`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.8rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

export const BottomFooter = styled.div`
  height: 7rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

export const BottomWrapper = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.wrapperWidth};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: 400;
  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

export const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const ButtonBox = styled.div`
  height: 100%;
  width: 21rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShopButton = styled(Link)`
  img {
    height: 3rem;
    width: 10rem;
  }
`;
