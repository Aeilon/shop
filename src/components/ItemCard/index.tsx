import React, { useState } from "react";
import styled from "styled-components";
import "firebase/storage";
import { useFirebase } from "react-redux-firebase";
import noImage from "../../images/noImage.png";
import hearthIcon from "../../images/hearthIcon.png";
import { useSelector } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GridView = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 3.2rem;
  grid-row-gap: 1.6rem;
  margin-bottom: 3rem;
`;
const LargeView = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const MainGrid = styled.div`
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
    -webkit-box-shadow: 0 0 27px -8px ${({ theme }) => theme.color.light};
    -moz-box-shadow: 0 0 27px -8px ${({ theme }) => theme.color.light};
    box-shadow: 0 0 27px -8px ${({ theme }) => theme.color.light};
    transition: box-shadow 0.25s ease-in-out;
  }
`;

const ImageBoxGrid = styled.div`
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

const ItemName = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transition: color 0.1s ease-in-out;
  }
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }

  p:nth-child(2) {
    font-size: 1.2rem;
    margin-left: 1rem;
    color: #969696;
    text-decoration: line-through;
  }
`;

const NewBoxGrid = styled.div`
  position: absolute;
  width: 3.5rem;
  height: 1.6rem;
  border-radius: 0.5rem;
  background: #00b517;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1.5rem;
  left: 1.5rem;

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const FavoriteIcon = styled.img`
  position: absolute;
  height: 1.6rem;
  width: 1.6rem;
  cursor: pointer;
  top: 1.5rem;
  right: 1.5rem;
  filter: grayscale(100%);
  opacity: 0.4;
  transition: filter 0.1s ease-in-out, opacity 0.1s ease-in-out;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
    transition: filter 0.1s ease-in-out, opacity 0.1s ease-in-out;
  }
`;

const MainLarge = styled.div`
  height: 22rem;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  position: relative;
  margin-top: 1.5rem;
`;

const ImageBoxLarge = styled.div`
  height: 100%;
  width: 21.95rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div`
  height: 100%;
  width: 43.9rem;
  padding: 2.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 20%;

  h5 {
    font-size: 1.8rem;
  }
`;

const RateBox = styled.div`
  width: 100%;
  height: 20%;

  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const DescriptionBox = styled.div`
  width: 100%;
  height: 60%;

  p {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const AsideDiv = styled.div`
  height: 100%;
  width: 21.95rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid ${({ theme }) => theme.color.light};
  padding: 2.25rem 1.5rem;
`;

const PriceBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 2.5rem;
  }

  p:nth-child(2) {
    margin-left: 1rem;
    color: #969696;
    font-size: 1.5rem;
    text-decoration: line-through;
  }
`;
const ButtonBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 75%;
  width: 75%;
`;

const NewBoxLarge = styled.div`
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

const BlueButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.primary};
  height: 3.75rem;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary};
  width: 100%;
  transition: background 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    transition: background 0.1s ease-in-out;
  }
`;

const WhiteButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.light};
  height: 3.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray};
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  transition: border 0.1s ease-in-out;

  img {
    width: 16px;
    margin-right: 1.5rem;
    opacity: 0.8;
    height: 16px;
    filter: grayscale(100%);
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.secondary};
    transition: border 0.1s ease-in-out;
  }
`;

const Star = styled(FontAwesomeIcon)`
  color: #f7a724;
`;

const EmptyStar = styled(FontAwesomeIcon)`
  color: #cccccc;
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
  const view = useSelector((state: ISelector) => state.view);
  const imageUrlName = `${name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(".", "")}.png`;

  React.useEffect(() => {
    storageRef
      .child(imageUrlName)
      .getDownloadURL()
      .then((url) => setImageUrl(url))
      .catch((error) => setImageUrl(noImage));
  }, []);
  if (view === "large") {
    return (
      <MainLarge>
        {isNew && (
          <NewBoxLarge>
            <p>NEW</p>
          </NewBoxLarge>
        )}
        <ImageBoxLarge>
          <Image src={imageUrl} alt={name} />
        </ImageBoxLarge>
        <CenterDiv>
          <TitleBox>
            <h5>{name}</h5>
          </TitleBox>
          <RateBox>
            <p>
              <Star icon={faStar} />
              <Star icon={faStar} />
              <Star icon={faStar} />
              <EmptyStar icon={faStar} />
              <EmptyStar icon={faStar} />
            </p>
          </RateBox>
          <DescriptionBox>
            <p>
              Take it as demo specs, ipsum dolor sit amet, consectetuer
              adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, Ut wisi enim ad minim veniam
            </p>
          </DescriptionBox>
        </CenterDiv>
        <AsideDiv>
          <PriceBox>
            <p>${price}</p>
          </PriceBox>
          <ButtonBox>
            <BlueButton>Details</BlueButton>
            <WhiteButton>
              <img src={hearthIcon} alt="hearth" /> Add to wishlist
            </WhiteButton>
          </ButtonBox>
        </AsideDiv>
      </MainLarge>
    );
  } else {
    return (
      <MainGrid>
        {isNew && (
          <NewBoxGrid>
            <p>NEW</p>
          </NewBoxGrid>
        )}
        <FavoriteIcon src={hearthIcon} />
        <ImageBoxGrid>
          <Image src={imageUrl} alt={name} />
        </ImageBoxGrid>
        <ItemDescription>
          <ItemName>{name}</ItemName>
          <ItemPrice>
            <p>${price}</p>
          </ItemPrice>
        </ItemDescription>
      </MainGrid>
    );
  }
};

export default ItemCard;
