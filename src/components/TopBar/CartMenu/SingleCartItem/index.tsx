import React, { useEffect, useState } from "react";
import { DropdownItem, ItemDiv, MinusIcon, StyledP } from "./style";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
}

interface SingleItem {
  name: string;
  price: number;
  category: string;
  isNew: boolean;
  images: string[];
}

const SingeCartItem: React.FC<Props> = ({ id }) => {
  const history = useHistory();
  const firebase = useFirebase();
  const { cartItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const [item, setItem] = useState<SingleItem>({
    name: "",
    price: 0,
    category: "",
    isNew: false,
    images: [],
  });

  const clickHandle = (id: string) => {
    history.push(`/item/${id}`);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .get()
      .then((snapshot) => setItem(snapshot.data() as SingleItem));
  }, []);

  const removeCartItem = async (e: any) => {
    e.stopPropagation();
    alert("You have removed the product from your cart.");
    return await firebase.updateProfile({
      cartItems: cartItems.filter((item) => item.id !== id),
    });
  };

  if (!item.name) return <h1>Loading...</h1>;

  return (
    <DropdownItem onClick={() => clickHandle(id)}>
      <StyledP onClick={removeCartItem}>
        <MinusIcon icon={faMinusCircle} />
      </StyledP>
      <ItemDiv>
        <img src={item.images[0]} alt="item" />
      </ItemDiv>
      <ItemDiv>
        <p>{item.name}</p>
      </ItemDiv>
      <ItemDiv>
        <p>${item.price}</p>
      </ItemDiv>
    </DropdownItem>
  );
};

export default SingeCartItem;
