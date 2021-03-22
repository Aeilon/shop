import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import * as routes from "../../../constans/routes";
import { useFirebase } from "react-redux-firebase";

const Menu = styled.div`
  position: absolute;
  top: 5rem;
  right: -2.5rem;
  width: 14rem;
  height: 11rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const DropdownLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
  width: 100%;
`;

const DropdownItem = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #f8f8f8;
  }
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  width: 75%;
  margin: auto;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  width: 75%;
  margin: auto;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

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
