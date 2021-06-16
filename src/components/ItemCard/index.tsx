import React, { useState } from "react";
import "firebase/storage";
import { useLocation, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import noImage from "../../images/noImage.png";
import hearthIcon from "../../images/hearthIcon.png";
import * as routes from "../../constans/routes";
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
  id: string;
  images: string[];
}

const ItemCard: React.FC<Props> = ({ name, price, isNew, id, images }) => {
  let view = useSelector((state: ISelector) => state.view);
  const location = useLocation();
  const history = useHistory();
  if (location.pathname === routes.HOME) view = "grid";

  const clickHandle = (id: string) => {
    history.push(`/item/${id}`);
  };

  if (view === "large") {
    return (
      <MainLarge key={id}>
        {isNew && (
          <NewBoxLarge>
            <p>NEW</p>
          </NewBoxLarge>
        )}
        <ImageBoxLarge>
          <Image src={images[0]} alt={name} />
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
            <BlueButton onClick={() => clickHandle(id)}>Details</BlueButton>
            <WhiteButton>
              <img src={hearthIcon} alt="hearth" /> Add to wishlist
            </WhiteButton>
          </ButtonBox>
        </AsideDiv>
      </MainLarge>
    );
  } else {
    return (
      <MainGrid key={id}>
        {isNew && (
          <NewBoxGrid>
            <p>NEW</p>
          </NewBoxGrid>
        )}
        <FavoriteIcon src={hearthIcon} />
        <ImageBoxGrid>
          <Image src={images[0]} alt={name} />
        </ImageBoxGrid>
        <ItemDescription>
          <ItemName onClick={() => clickHandle(id)}>{name}</ItemName>
          <ItemPrice>
            <p>${price}</p>
          </ItemPrice>
        </ItemDescription>
      </MainGrid>
    );
  }
};

export default ItemCard;
