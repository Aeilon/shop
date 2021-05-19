import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import * as routes from "../../constans/routes";

const Wrapper = styled.div`
  height: 5.4rem;
  width: ${({ theme }) => theme.wrapperWidth};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LinksBox = styled.div`
  height: 100%;
  width: 55rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 2rem;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.color.gray};
  }
`;
const SettingsBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
`;

const NavBar = () => {
  useFirestoreConnect([
    {
      collection: "categories",
    },
  ]);
  const categories = useSelector(
    (state: ISelector) => state.firestore.ordered.categories
  );

  return (
    <Wrapper>
      <LinksBox>
        <StyledLink to={routes.HOME}>Home</StyledLink>

        {categories &&
          categories.map((cat) => {
            const { category } = cat;
            return (
              <StyledLink to={`${routes.CATEGORY}/${category}`}>
                {category}
              </StyledLink>
            );
          })}
      </LinksBox>

      <SettingsBox>
        <StyledLink to={""}>USD</StyledLink>
        <StyledLink to={""}>English</StyledLink>
      </SettingsBox>
    </Wrapper>
  );
};

export default NavBar;
