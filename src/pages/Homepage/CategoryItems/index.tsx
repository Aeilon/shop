import React from "react";
import ItemCard from "../../../components/ItemCard";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import "firebase/storage";
import { Main, ItemsBox, CategoryBox, CategoryName } from "./style";

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
