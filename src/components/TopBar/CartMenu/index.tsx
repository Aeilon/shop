import React from "react";
import { DropdownLine, ButtonDiv, Menu } from "./style";
import { useSelector } from "react-redux";
import SingleCartItem from "./SingleCartItem";
import { useHistory } from "react-router-dom";
import * as routes from "../../../constans/routes";

interface Props {
  setCartActive: React.Dispatch<React.SetStateAction<boolean>>;
  cartRef: React.RefObject<HTMLDivElement>;
  cartActive: boolean;
}

const CartMenu: React.FC<Props> = ({ cartActive, cartRef }) => {
  const history = useHistory();
  const { cartItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const clickHandle = () => {
    history.push(routes.PAYMENT);
  };

  return (
    <Menu cartItems={cartItems} cartActive={cartActive} ref={cartRef}>
      {cartItems &&
        cartItems.map((item) => {
          const { id } = item;
          return <SingleCartItem key={id} id={id} />;
        })}
      {cartItems.length === 0 ? (
        <h2> Your cart is empty!</h2>
      ) : (
        <>
          <DropdownLine />
          <ButtonDiv onClick={clickHandle}>
            <p>Go to payment</p>
          </ButtonDiv>
        </>
      )}
    </Menu>
  );
};

export default CartMenu;
