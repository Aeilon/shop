import React, { useState } from "react";
import styled from "styled-components";
import "firebase/storage";
import { useFirebase } from "react-redux-firebase";
import noImage from "../../../../images/noImage.png";

const Main = styled.div`
  height: 30.8rem;
  width: 27.5rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: box-shadow 0.25s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px 0px 27px -8px ${({ theme }) => theme.color.light};
    -moz-box-shadow: 0px 0px 27px -8px ${({ theme }) => theme.color.light};
    box-shadow: 0px 0px 27px -8px ${({ theme }) => theme.color.light};
    transition: box-shadow 0.25s ease-in-out;
  }
`;

const ImageBox = styled.div`
  height: 22rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemDescription = styled.div`
  height: 8.8rem;
  width: 100%;
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

const Image = styled.img`
  height: 75%;
  width: 75%;
`;

const ItemName = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transition: color 0.1s ease-in-out;
  }
`;

const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  ${({ theme }) => theme.color.secondary};
`;

const NewBox = styled.div`
  position: absolute;
  width: 3.5rem;
  height: 1.6rem;
  border-radius: 0.5rem;
  background: #00b517;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1rem;
  left: 1rem;

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

interface Props {
  name: string;
  price: number;
  isNew: boolean;
}

const ItemCard: React.FC<Props> = ({ name, price, isNew }) => {
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const [imageUrl, setImageUrl] = useState("");

  const imageUrlName = `${name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(".", "")}.png`;

  storageRef
    .child(imageUrlName)
    .getDownloadURL()
    .then((url) => {
      setImageUrl(url);
    })
    .catch((error) => {
      setImageUrl(noImage);
    });

  return (
    <Main>
      {isNew && (
        <NewBox>
          <p>NEW</p>
        </NewBox>
      )}

      <ImageBox>
        <Image src={imageUrl} alt={name} />
      </ImageBox>
      <ItemDescription>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </ItemDescription>
    </Main>
  );
};

export default ItemCard;
