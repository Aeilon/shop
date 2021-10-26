import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import * as routes from "../../constans/routes";
import { StyledLink, LinksBox, SettingsBox, Wrapper } from "./style";

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
