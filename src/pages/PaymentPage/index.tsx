import React, { useState, useEffect } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import ContactInfoForm from "../../components/ContactInfoForm";
import DeliveryInfoForm from "../../components/DeliveryInfoForm";
import { useHistory } from "react-router-dom";
import {
  Main,
  RightSection,
  LeftSection,
  CouponBox,
  CouponInput,
  ApplyButton,
  CouponInputBox,
  PaymentBox,
  TextDiv,
  Line,
  ImagesBox,
  BlueButton,
  WhiteButton,
  BlurComponent,
  BlurContent,
  LeftSide,
  RightSide,
  Title,
  SuccessButton,
  CloseButton,
  PaymentOption,
  PaymentImageBox,
  RadioInput,
} from "./style";
import { TopBackground, TitleBox } from "../CategoryPage/style";
import payPal from "../../images/paypal.png";
import payPalb from "../../images/paypalb.png";
import visa from "../../images/visa.png";
import masterCard from "../../images/mastercard.png";
import americanExpress from "../../images/americanexpress.png";
import psc from "../../images/psc.png";
import hsbc from "../../images/hsbc.png";
import SingleItem from "./SingleItem";
import { useSelector } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PaymentPage = () => {
  useFirestoreConnect([
    {
      collection: "promocodes",
    },
  ]);
  const promocodes = useSelector(
    (state: ISelector) => state.firestore.ordered.promocodes
  );

  const { cartItems } = useSelector(
    (state: ISelector) => state.firebase.profile
  );
  const history = useHistory();
  const [display, toggleDisplay] = useState(false);
  const [sum, setSum] = useState(0);
  const [promoValue, setPromoValue] = useState(0);
  const [promoType, setPromoType] = useState("");
  const [code, setCode] = useState("");
  const [promoPercentageValue, setPromoPercentageValue] = useState(0);

  const submitCode = () => {
    const validCode = promocodes.filter(
      (promocode) => promocode.code === code.toLowerCase()
    );

    if (validCode.length === 0) {
      return alert("This code doesn't exist");
    } else {
      setPromoValue(validCode[0].value);
      setPromoType(validCode[0].type);
    }
  };

  const onchangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    setPromoPercentageValue((100 - promoValue) / 100);
  }, [promoValue]);

  return (
    <>
      <BlurComponent display={display}>
        <CloseButton icon={faTimes} onClick={() => toggleDisplay(false)} />
        <BlurContent>
          <LeftSide>
            <ContactInfoForm />
            <DeliveryInfoForm />
          </LeftSide>
          <RightSide>
            <Title>Payment method</Title>
            <PaymentOption>
              <span>
                <RadioInput
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                />
                <label htmlFor="paypal">Paypal</label>
              </span>

              <PaymentImageBox>
                <img src={payPalb} alt="x" />
              </PaymentImageBox>
            </PaymentOption>
            <PaymentOption>
              <span>
                <RadioInput
                  type="radio"
                  id="creditCard"
                  name="payment"
                  value="creditCard"
                />
                <label htmlFor="creditCard">Credit Card</label>
              </span>
              <PaymentImageBox>
                <img src={visa} alt="visa" />
                <img src={masterCard} alt="master card" />
                <img src={americanExpress} alt="american express" />
              </PaymentImageBox>
            </PaymentOption>
            <PaymentOption>
              <span>
                <RadioInput
                  type="radio"
                  id="bankTransfer"
                  name="payment"
                  value="bankTransfer"
                />
                <label htmlFor="bankTransfer">Bank Transfer</label>
              </span>
              <PaymentImageBox>
                <img src={hsbc} alt="hsbc" />
              </PaymentImageBox>
            </PaymentOption>
            <PaymentOption>
              <span>
                <RadioInput type="radio" id="psc" name="payment" value="psc" />
                <label htmlFor="psc">Pay Safe Card</label>
              </span>
              <PaymentImageBox>
                <img src={psc} alt="psc" />
              </PaymentImageBox>
            </PaymentOption>

            <SuccessButton
              onClick={() => {
                alert("Transaction Successful!");
                history.push("/");
              }}
            >
              Check out
            </SuccessButton>
          </RightSide>
        </BlurContent>
      </BlurComponent>
      <TopBackground>
        <TitleBox>
          <Title>Shopping cart</Title>
        </TitleBox>
      </TopBackground>
      <Main>
        <LeftSection>
          {cartItems &&
            cartItems.map((item) => {
              const { id, amount } = item;
              return (
                <SingleItem setSum={setSum} key={id} id={id} amount={amount} />
              );
            })}
        </LeftSection>
        <RightSection>
          <CouponBox>
            <p>Have coupon?</p>
            <CouponInputBox>
              <CouponInput
                placeholder="Coupon code"
                disabled={promoValue !== 0}
                value={code}
                onChange={onchangeHandle}
              />
              <ApplyButton onClick={submitCode}>
                <p>Apply</p>
              </ApplyButton>
            </CouponInputBox>
          </CouponBox>
          <PaymentBox>
            <TextDiv>
              <p>Total price:</p>
              <p>{sum}$</p>
            </TextDiv>
            <TextDiv>
              <p>Discount</p>
              <p>
                - {promoValue} {promoType === "percentage" ? "%" : "$"}
              </p>
            </TextDiv>
            <TextDiv>
              <p>Total</p>
              <p>
                {promoType === "percentage"
                  ? Number(Math.round(sum * promoPercentageValue * 100) / 100)
                  : sum - promoValue}
                $
              </p>
            </TextDiv>
            <Line />
            <ImagesBox>
              <img src={payPal} alt="zdj" />
              <img src={visa} alt="zdj" />
              <img src={masterCard} alt="zdj" />
              <img src={americanExpress} alt="zdj" />
            </ImagesBox>
            <BlueButton onClick={() => toggleDisplay(true)}>
              Make Purchase
            </BlueButton>
            <WhiteButton>Continue Shopping</WhiteButton>
          </PaymentBox>
        </RightSection>
      </Main>
    </>
  );
};

export default PaymentPage;
