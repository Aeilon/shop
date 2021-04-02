import React from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import "firebase/storage";

const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 4.5rem auto 0 auto;
  cursor: pointer;
`;

const CategoryBox = styled.div`
  height: 6.4rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const CategoryName = styled.h2`
  font-size: 2.8rem;
`;

const ItemsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 3.2rem;
  grid-row-gap: 1.6rem;
`;

interface Props {
  categoryName: string;
  categoryTitle: string;
}

const CategoryItems: React.FC<Props> = (props) => {
  useFirestoreConnect([
    {
      collection: "items",
    },
  ]);
  const items = useSelector(
    (state: ISelector) => state.firestore.ordered.items
  );

  return (
    <Main>
      <CategoryBox>
        <CategoryName>{props.categoryTitle}</CategoryName>
      </CategoryBox>
      <ItemsBox>
        {items &&
          items.map((item) => {
            const { name, price, id, category, isNew } = item;

            if (category !== props.categoryName) return;

            return (
              <ItemCard name={name} price={price} key={id} isNew={isNew} />
            );
          })}
      </ItemsBox>
    </Main>
  );
};

export default CategoryItems;
