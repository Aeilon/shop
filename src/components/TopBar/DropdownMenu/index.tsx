import React from "react";
import { useHistory } from "react-router-dom";
import * as routes from "../../../constans/routes";
import { useFirebase } from "react-redux-firebase";
import { DropdownItem, DropdownLine, StyledLink, StyledP, Menu } from "./style";

interface Props {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const DropdownMenu: React.FC<Props> = ({ setIsActive, dropdownRef }) => {
  const firebase = useFirebase();
  const history = useHistory();

  const logOut = async () => {
    try {
      await firebase.logout();
      history.push(routes.HOME);
      alert("You have successfully logout your account.");
      setIsActive(false);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Menu ref={dropdownRef}>
      <DropdownItem>
        <StyledLink to="">Profile setting</StyledLink>
      </DropdownItem>
      <DropdownItem>
        <StyledP onClick={() => alert("My orders")}>My orders</StyledP>
      </DropdownItem>
      <DropdownLine />
      <DropdownItem>
        <StyledP onClick={logOut}>Log out</StyledP>
      </DropdownItem>
    </Menu>
  );
};

export default DropdownMenu;
