import React from "react";
import styled from "styled-components";
import padlock from "../../../images/padlock.png";
import museum from "../../../images/museum.png";
import truck from "../../../images/truck.png";

const Main = styled.div`
  width: ${({ theme }) => theme.wrapperWidth};
  border: 1px solid ${({ theme }) => theme.color.light};
  height: 16.2rem;
  padding: 1.875rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin: 4.5rem auto 0 auto;
`;

const Advantage = styled.div`
  height: 100%;
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Icon = styled.img`
  height: 4rem;
  width: 4rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.grayDark};
`;

const Message = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.color.secondary};
`;

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
