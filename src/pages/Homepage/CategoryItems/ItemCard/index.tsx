import React from "react";
import styled from "styled-components";
import banner from "../../../../images/banner.jpg";

const ItemCard = styled.div`
  height: 30.8rem;
  width: 27.5rem;
  border: 1px solid ${({ theme }) => theme.color.light};
  border-radius: 0.5rem;
  margin-top: 2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.25s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px 0px 27px -8px ${({ theme }) => theme.color.light};
    -moz-box-shadow: 0px 0px 27px -8px ${({ theme }) => theme.color.light};
    box-shadow: 0px 0px 27px -8px ${({ theme }) => theme.color.light};
    transition: box-shadow 0.25s ease-in-out;
  }
`;

const ImageBox = styled.div`
  height: 22rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemDescription = styled.div`
  height: 8.8rem;
  width: 100%;
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.color.light};
`;

const Image = styled.img`
  height: 75%;
  width: 75%;
`;

const ItemName = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transition: color 0.1s ease-in-out;
  }
`;

const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  ${({ theme }) => theme.color.secondary};
`;
export default () => {
  return (
    <ItemCard>
      <ImageBox>
        <Image src={banner} alt="xd" />
      </ImageBox>
      <ItemDescription>
        <ItemName>Bell & Ross Nightlum</ItemName>
        <ItemPrice>$3753.00</ItemPrice>
      </ItemDescription>
    </ItemCard>
  );
};
