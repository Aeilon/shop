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
  const [imageIndex, setImageIndex] = useState(0);
  const [item, setItem] = useState<SingleItem>({
    name: "",
    price: 0,
    category: "",
    isNew: false,
    images: [],
    options: {},
  });

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
            <FavBox>
              <HearthIcon src={hearthIcon} alt="favourites" />
              <p>Save for later</p>
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
          <WhiteButton>Add to card</WhiteButton>
        </ButtonBox>
      </ItemBox>
    </Main>
  );
};

export default ItemPage;
