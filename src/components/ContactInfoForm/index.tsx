import React from "react";
import {
  Main,
  StyledInput,
  InputsBox,
  SmallInputBox,
  Label,
  Title,
} from "./style";

const ContactInfoForm = () => {
  return (
    <Main>
      <Title>Contact info</Title>
      <InputsBox>
        <SmallInputBox>
          <Label>First name</Label>
          <StyledInput type="text" name="name" />
        </SmallInputBox>
        <SmallInputBox>
          <Label>Last name</Label>
          <StyledInput type="text" name="lastName" />
        </SmallInputBox>
      </InputsBox>

      <InputsBox>
        <SmallInputBox>
          <Label>Phone</Label>
          <StyledInput type="text" name="phone" />
        </SmallInputBox>
        <SmallInputBox>
          <Label>Email</Label>
          <StyledInput type="text" name="email" />
        </SmallInputBox>
      </InputsBox>
    </Main>
  );
};

export default ContactInfoForm;
