import React from "react";
import padlock from "../../../images/padlock.png";
import museum from "../../../images/museum.png";
import truck from "../../../images/truck.png";
import { Main, Title, Icon, Message, Advantage } from "./style";

export default () => {
  return (
    <Main>
      <Advantage>
        <Icon src={truck} alt="xd" />
        <Title>Fast delivery</Title>
        <Message>
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore
        </Message>
      </Advantage>
      <Advantage>
        <Icon src={museum} alt="xd" />
        <Title>Creative Strategy</Title>
        <Message>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Message>
      </Advantage>
      <Advantage>
        <Icon src={padlock} alt="xd" />
        <Title>High secured</Title>
        <Message>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Message>
      </Advantage>
    </Main>
  );
};
