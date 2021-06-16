import React from "react";
import ChangeViewButtons from "./ChangeViewButtons";
import ItemCard from "../../components/ItemCard";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import "firebase/storage";
import { useParams, useHistory } from "react-router-dom";
import * as routes from "../../constans/routes";
import {
  Main,
  ButtonBox,
  TitleBox,
  Title,
  MainBar,
  ItemList,
  LeftSection,
  RightSection,
  NumberOfItems,
  Option,
  Select,
  TopBackground,
} from "./style";

interface Params {
  category: string;
}

const CategoryPage = () => {
  const params = useParams<Params>();
  const history = useHistory();
  useFirestoreConnect([
    {
      collection: "items",
    },
  ]);
  const items = useSelector(
    (state: ISelector) => state.firestore.ordered.items
  );

  const view = useSelector((state: ISelector) => state.view);

  const itemCounter =
    items && items.filter((item) => item.category === params.category).length;

  if (itemCounter === 0) history.push(routes.HOME);

  return (
    <>
      <TopBackground>
        <TitleBox>
          <Title>{params.category}</Title>
        </TitleBox>
      </TopBackground>
      <Main>
        <LeftSection />
        <RightSection>
          <MainBar>
            <NumberOfItems>{itemCounter} Items found</NumberOfItems>
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
            {items &&
              items
                .filter((item) => item.category === params.category)
                .map((item) => {
                  const { name, price, id, isNew, images } = item;

                  return (
                    <ItemCard
                      key={id}
                      name={name}
                      price={price}
                      id={id}
                      isNew={isNew}
                      images={images}
                    />
                  );
                })}
          </ItemList>
        </RightSection>
      </Main>
    </>
  );
};

export default CategoryPage;
