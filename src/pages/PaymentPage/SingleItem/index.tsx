import React, { SetStateAction, useEffect, useState } from "react";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import * as routes from "../../../constans/routes";
import {
  Icon,
  RemoveBox,
  ItemsNumber,
  NumberBox,
  LeftButton,
  RightButton,
  Price,
  DescriptionBox,
  Name,
  ImageBox,
  Main,
  Category,
} from "./style";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

interface Props {
  id: string;
  amount: number;
  setSum: React.Dispatch<SetStateAction<number>>;
}

interface SingleItem {
  name: string;
  price: number;
  category: string;
  isNew: boolean;
  images: string[];
}

const SingleItem: React.FC<Props> = ({ id, amount, setSum }) => {
  const firebase = useFirebase();
  const [item, setItem] = useState<SingleItem>({
    name: "",
    price: 0,
    category: "",
    isNew: false,
    images: [],
  });

  const { cartItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  useEffect(() => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .get()
      .then((snapshot) => setItem(snapshot.data() as SingleItem));
  }, []);

  useEffect(() => {
    setSum((sum) => sum + item.price * amount);
  }, [item]);

  const increment = async () => {
    if (amount === 99) return;
    setSum((sum) => sum + item.price);
    return await firebase.updateProfile({
      cartItems: cartItems.map((item) => {
        if (item.id === id) {
          return {
            id,
            amount: amount + 1,
          };
        }
        return item;
      }),
    });
  };

  const decrement = async () => {
    if (amount === 1) return;
    setSum((sum) => sum - item.price);
    return await firebase.updateProfile({
      cartItems: cartItems.map((item) => {
        if (item.id === id) {
          return {
            id,
            amount: amount - 1,
          };
        }
        return item;
      }),
    });
  };

  const removeCartItem = async () => {
    alert("You have removed the product from your cart.");
    return await firebase.updateProfile({
      cartItems: cartItems.filter((item) => item.id !== id),
    });
  };

  return (
    <Main>
      <ImageBox>
        <img src={item.images[0]} alt="img" />
      </ImageBox>
      <DescriptionBox>
        <Category to={`${routes.CATEGORY}/${item.category}`}>
          {item.category}
        </Category>
        <Name to="">{item.name}</Name>
      </DescriptionBox>
      <NumberBox>
        <LeftButton onClick={() => decrement()}>
          <p>
            <Icon icon={faMinus} />
          </p>
        </LeftButton>
        <ItemsNumber>
          <p>{amount}</p>
        </ItemsNumber>
        <RightButton onClick={() => increment()}>
          <p>
            <Icon icon={faPlus} />
          </p>
        </RightButton>
      </NumberBox>
      <Price>${item.price * amount}</Price>
      <RemoveBox onClick={removeCartItem}>
        <p>
          <Icon icon={faTimes} />
        </p>
      </RemoveBox>
    </Main>
  );
};

export default SingleItem;
