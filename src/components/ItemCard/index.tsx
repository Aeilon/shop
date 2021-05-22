import React, { useState } from "react";
import "firebase/storage";
import { useFirebase } from "react-redux-firebase";
import noImage from "../../images/noImage.png";
import hearthIcon from "../../images/hearthIcon.png";
import { useSelector } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonBox,
  BlueButton,
  CenterDiv,
  AsideDiv,
  DescriptionBox,
  ItemDescription,
  ItemName,
  Image,
  ImageBoxGrid,
  ImageBoxLarge,
  NewBoxGrid,
  NewBoxLarge,
  ItemPrice,
  MainGrid,
  MainLarge,
  PriceBox,
  WhiteButton,
  RateBox,
  EmptyStar,
  Star,
  TitleBox,
  FavoriteIcon,
} from "./style";

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
