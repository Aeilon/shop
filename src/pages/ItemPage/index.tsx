import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "firebase/storage";
import { useFirebase } from "react-redux-firebase";
import {
  Main,
  ImageBox,
  ItemBox,
  Category,
  TopInfo,
  Name,
  TopSpanDiv,
  FavBox,
  Description,
  MidInfo,
  StyledTable,
  ButtonLabel,
  OptionsBox,
  SizeDiv,
  PriceBox,
  ButtonBox,
  BlueButton,
  WhiteButton,
  LeftSide,
  SmallImagesBox,
  SmallImage,
  ArrowRight,
  ArrowLeft,
  Arrows,
} from "./style";
import { Star, EmptyStar } from "../../components/ItemCard/style";
import { HearthIcon } from "../../components/TopBar/style";
import hearthIcon from "../../images/hearthIcon.png";
import {
  faStar,
  faCaretRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

interface Params {
  id: string;
}

type Option = { [key: string]: string };
type Options = { [key: string]: string[] };

interface SingleItem {
  name: string;
  price: number;
  category: string;
  isNew: boolean;
  images: string[];
  options: Options;
}

const ItemPage = () => {
  const firebase = useFirebase();
  const [options, setOptions] = useState<Option>({});
  const params = useParams<Params>();
  const history = useHistory();
  const [isFav, toggleFav] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [item, setItem] = useState<SingleItem>({
    name: "",
    price: 0,
    category: "",
    isNew: false,
    images: [],
    options: {},
  });

  const { isLoaded, isEmpty, favItems, cartItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const handleChange = (key: string, optionValue: string) => {
    setOptions((prevState) => ({ ...prevState, [key]: optionValue }));
  };

  const goToCategory = (category: string) => {
    history.push(`/category/${category}`);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("items")
      .doc(params.id)
      .get()
      .then((snapshot) => setItem(snapshot.data() as SingleItem));
  }, [params]);

  useEffect(() => {
    toggleFav(false);
    if (favItems && favItems.filter((item) => item === params.id).length > 0) {
      toggleFav(true);
    }

    return;
  }, [params.id, favItems, isFav]);

  const nextImage = (index: number) => {
    if (index === item.images.length - 1) {
      setImageIndex(-1);
    }
    setImageIndex((index) => index + 1);
  };

  const prevImage = (index: number) => {
    if (index === 0) {
      setImageIndex(item.images.length);
    }
    setImageIndex((index) => index - 1);
  };

  const addFavItem = async () => {
    alert("You have added the product to your favorites");
    await firebase.updateProfile({
      favItems: !favItems ? [params.id] : [...favItems, params.id],
    });
  };
  const addCartItem = async () => {
    if (cartItems.filter((item) => item.id === params.id).length > 0) {
      return alert("The product is already in your cart.");
    } else {
      alert("You have added the product to your cart");
      await firebase.updateProfile({
        cartItems: !cartItems
          ? [params.id]
          : [
              ...cartItems,
              {
                id: params.id,
                amount: 1,
              },
            ],
      });
    }
  };

  const removeFavItem = async () => {
    alert("You have removed the product to your favorites");
    toggleFav(false);
    return await firebase.updateProfile({
      favItems: favItems.filter((item) => item !== params.id),
    });
  };

  const updateFavItem = async () => {
    if (isLoaded && isEmpty)
      return alert("Login to add products to your favorites");

    if (favItems.filter((item) => item === params.id).length > 0) {
      return await removeFavItem();
    }
    await addFavItem();
  };

  return (
    <Main>
      <LeftSide>
        <ImageBox>
          <img src={item.images[imageIndex]} alt={item.images[imageIndex]} />
          {item.images.length > 1 && (
            <Arrows>
              <ArrowLeft
                icon={faCaretLeft}
                onClick={() => prevImage(imageIndex)}
              />
              <ArrowRight
                icon={faCaretRight}
                onClick={() => nextImage(imageIndex)}
              />
            </Arrows>
          )}
        </ImageBox>
        <SmallImagesBox>
          {item.images.map((image, index) => {
            return (
              <SmallImage key={image} onClick={() => setImageIndex(index)}>
                <img src={image} alt={image} />
              </SmallImage>
            );
          })}
        </SmallImagesBox>
      </LeftSide>

      <ItemBox>
        <TopInfo>
          <Category onClick={() => goToCategory(item.category)}>
            {item.category}
          </Category>
          <Name>{item.name}</Name>
          <TopSpanDiv>
            <p>
              <Star icon={faStar} />
              <Star icon={faStar} />
              <Star icon={faStar} />
              <EmptyStar icon={faStar} />
              <EmptyStar icon={faStar} />
            </p>
            <FavBox onClick={updateFavItem}>
              <HearthIcon src={hearthIcon} alt="favourites" />
              <p>{isFav ? "Remove from favorites" : "Save for later"} </p>
            </FavBox>
          </TopSpanDiv>
        </TopInfo>
        <MidInfo>
          <Description>
            <p>
              Virgil Abloh’s Off-White is a streetwear-inspired collection that
              continues to break away from the conventions of mainstream
              fashion. Made in Italy, these black and brown Odsy-1000 low-top
              sneakers.
            </p>
          </Description>
          <StyledTable>
            <tr>
              <th>Model</th>
              <td>Odsy-1000</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>Brown</td>
            </tr>
            <tr>
              <th>Delivery</th>
              <td>Russia, USA, and Europe</td>
            </tr>
          </StyledTable>
        </MidInfo>
        <SizeDiv>
          <p>Available options</p>
        </SizeDiv>

        {Object.entries(item.options).map(([key, option]) => (
          <OptionsBox key={key}>
            {option.map((optionValue) => (
              <ButtonLabel
                key={optionValue}
                pickedOption={options[key]}
                value={optionValue}
              >
                <input
                  type="radio"
                  name="size"
                  value={optionValue}
                  onClick={() => handleChange(key, optionValue)}
                />
                <span>{optionValue}</span>
              </ButtonLabel>
            ))}
          </OptionsBox>
        ))}

        <PriceBox>
          <p>${item.price}</p>
          <p>${item.price}</p>
        </PriceBox>
        <ButtonBox>
          <BlueButton>Buy now</BlueButton>
          <WhiteButton onClick={() => addCartItem()}>Add to card</WhiteButton>
        </ButtonBox>
      </ItemBox>
    </Main>
  );
};

export default ItemPage;
