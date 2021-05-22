import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 5.4rem;
  width: ${({ theme }) => theme.wrapperWidth};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LinksBox = styled.div`
  height: 100%;
  width: 55rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 2rem;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.color.gray};
  }
`;
export const SettingsBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
`;
