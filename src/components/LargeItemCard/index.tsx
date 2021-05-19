import React, { useState } from "react";
import styled from "styled-components";
import noImage from "../../images/noImage.png";
import hearthIcon from "../../images/hearthIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useFirebase } from "react-redux-firebase";

const MainLarge = styled.div`
  height: 22rem;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  position: relative;
  margin-top: 1.5rem;
`;

const ImageBox = styled.div`
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

const LargeItemCard: React.FC<Props> = ({ name, price, isNew }) => {
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
    <MainLarge>
      {isNew && (
        <NewBox>
          <p>NEW</p>
        </NewBox>
      )}
      <ImageBox>
        <Image src={imageUrl} alt={name} />
      </ImageBox>
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
            Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing
            elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut
            wisi enim ad minim veniam
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
};

export default LargeItemCard;
