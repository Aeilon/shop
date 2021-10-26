import React, { useState } from "react";
import {
  StyledLabel,
  StyledInput,
  RadioInput,
  RadioInputBox,
  BigInputBox,
  InputsBox,
  RadioInputsBox,
  SmallInputBox,
  Label,
  Title,
  Main,
} from "./style";

interface UserData {
  city: string;
  area: string;
  street: string;
  building: string;
  house: string;
  postalCode: string;
  zip: string;
  delivery: string;
}

const DeliveryInfoForm: React.FC = () => {
  const [pickedOption, setPickedOption] = useState("");
  const [userData, setUserData] = useState<UserData>({
    city: "",
    area: "",
    street: "",
    building: "",
    house: "",
    postalCode: "",
    zip: "",
    delivery: "",
  });

  const {
    city,
    area,
    street,
    building,
    house,
    postalCode,
    zip,
    delivery,
  } = userData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "delivery") {
      setPickedOption(value);
      setUserData((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setUserData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <Main>
      <Title>Delivery info</Title>
      <RadioInputsBox>
        <RadioInputBox pickedOption={pickedOption} value="delivery">
          <span>
            <RadioInput
              type="radio"
              id="delivery"
              name="delivery"
              value="delivery"
              onChange={handleChange}
            />
            <StyledLabel htmlFor="delivery">Delivery</StyledLabel>
          </span>
          <p>We will deliver by DHL Kargo</p>
        </RadioInputBox>
        <RadioInputBox pickedOption={pickedOption} value="pickup">
          <span>
            <RadioInput
              type="radio"
              id="pickup"
              name="delivery"
              value="pickup"
              onChange={handleChange}
            />

            <StyledLabel htmlFor="pickup">Pick-up</StyledLabel>
            <p>Come to our office to somewhere</p>
          </span>
        </RadioInputBox>
      </RadioInputsBox>

      <InputsBox>
        <SmallInputBox>
          <Label>City*</Label>
          <StyledInput
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </SmallInputBox>
        <SmallInputBox>
          <Label>Area*</Label>
          <StyledInput
            type="text"
            name="area"
            value={area}
            onChange={handleChange}
          />
        </SmallInputBox>
      </InputsBox>
      <BigInputBox>
        <Label>Street*</Label>
        <StyledInput
          type="text"
          name="street"
          value={street}
          onChange={handleChange}
        />
      </BigInputBox>
      <InputsBox>
        <SmallInputBox>
          <Label>Building*</Label>
          <StyledInput
            type="text"
            name="building"
            value={building}
            onChange={handleChange}
          />
        </SmallInputBox>
        <SmallInputBox>
          <Label>House</Label>
          <StyledInput
            type="text"
            name="house"
            value={house}
            onChange={handleChange}
          />
        </SmallInputBox>
      </InputsBox>
      <InputsBox>
        <SmallInputBox>
          <Label>Postal code</Label>
          <StyledInput
            type="text"
            name="postalCode"
            value={postalCode}
            onChange={handleChange}
          />
        </SmallInputBox>
        <SmallInputBox>
          <Label>Zip</Label>
          <StyledInput
            type="text"
            name="zip"
            value={zip}
            onChange={handleChange}
          />
        </SmallInputBox>
      </InputsBox>
    </Main>
  );
};

export default DeliveryInfoForm;
