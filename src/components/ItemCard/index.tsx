import React, { useState, useEffect } from "react";
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
  id: string;
}

interface SingleItem {
  name: string;
  price: number;
  category: string;
  isNew: boolean;
  images: string[];
}

const ItemCard: React.FC<Props> = ({ id }) => {
  const firebase = useFirebase();
  const { isLoaded, isEmpty } = useSelector(
    (state: ISelector) => state.firebase.profile
  );
  const [item, setItem] = useState<SingleItem>({
    name: "",
    price: 0,
    category: "",
    isNew: false,
    images: [],
  });
  const [isFav, toggleFav] = useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .get()
      .then((snapshot) => setItem(snapshot.data() as SingleItem));
  }, []);

  let view = useSelector((state: ISelector) => state.view);
  const location = useLocation();
  const history = useHistory();
  if (location.pathname === routes.HOME) view = "grid";

  const clickHandle = (id: string) => {
    history.push(`/item/${id}`);
  };

  const { favItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  useEffect(() => {
    toggleFav(false);
    if (favItems && favItems.filter((item) => item === id).length > 0) {
      toggleFav(true);
    }

    return;
  }, [id, favItems, isFav]);

  const addFavItem = async () => {
    if (isLoaded && isEmpty)
      return alert("Login to add products to your favorites");

    if (favItems.filter((item) => item === id).length > 0) {
      alert("You have removed the product to your favorites");
      toggleFav(false);
      return await firebase.updateProfile({
        favItems: favItems.filter((item) => item !== id),
      });
    }
    alert("You have added the product to your favorites");
    await firebase.updateProfile({
      favItems: !favItems ? [id] : [...favItems, id],
    });
  };
  if (view === "large") {
    return (
      <MainLarge key={id}>
        {item.isNew && (
          <NewBoxLarge>
            <p>NEW</p>
          </NewBoxLarge>
        )}
        <ImageBoxLarge>
          <Image src={item.images[0]} alt={item.name} />
        </ImageBoxLarge>
        <CenterDiv>
          <TitleBox>
            <h5>{item.name}</h5>
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
            <p>${item.price}</p>
          </PriceBox>
          <ButtonBox>
            <BlueButton onClick={() => clickHandle(id)}>Details</BlueButton>
            <WhiteButton onClick={addFavItem}>
              <img src={hearthIcon} alt="hearth" /> Add to favorites
            </WhiteButton>
          </ButtonBox>
        </AsideDiv>
      </MainLarge>
    );
  } else {
    return (
      <MainGrid key={id}>
        {item.isNew && (
          <NewBoxGrid>
            <p>NEW</p>
          </NewBoxGrid>
        )}
        <FavoriteIcon isFav={isFav} onClick={addFavItem} src={hearthIcon} />
        <ImageBoxGrid>
          <Image src={item.images[0]} alt={item.name} />
        </ImageBoxGrid>
        <ItemDescription>
          <ItemName onClick={() => clickHandle(id)}>{item.name}</ItemName>
          <ItemPrice>
            <p>${item.price}</p>
          </ItemPrice>
        </ItemDescription>
      </MainGrid>
    );
  }
};

export default ItemCard;
