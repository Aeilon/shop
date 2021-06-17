import React from "react";
import ChangeViewButtons from "../CategoryPage/ChangeViewButtons";
import ItemCard from "../../components/ItemCard";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "firebase/storage";
import * as routes from "../../constans/routes";
import {
  Main,
  ButtonBox,
  TitleBox,
  Title,
  MainBar,
  ItemList,
  RightSection,
  NumberOfItems,
  Option,
  Select,
  TopBackground,
} from "./style";

const CategoryPage = () => {
  const history = useHistory();
  const { isLoaded, isEmpty, favItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );
  const view = useSelector((state: ISelector) => state.view);

  if (isLoaded && isEmpty) history.push(routes.HOME);

  return (
    <>
      <TopBackground>
        <TitleBox>
          <Title>Favorite products</Title>
        </TitleBox>
      </TopBackground>
      <Main>
        <RightSection>
          <MainBar>
            <NumberOfItems>
              {favItems && favItems.length} Items found
            </NumberOfItems>
            <ButtonBox>
              <Select>
                <Option value="latest">Latest items</Option>
                <Option value="trending">Trending</Option>
                <Option value="popular">Most Popular</Option>
                <Option value="cheapest">Cheapest</Option>
              </Select>
              <ChangeViewButtons />
            </ButtonBox>
          </MainBar>

          <ItemList view={view}>
            {favItems &&
              favItems.map((id) => {
                return <ItemCard key={id} id={id} />;
              })}
          </ItemList>
        </RightSection>
      </Main>
    </>
  );
};

export default CategoryPage;
