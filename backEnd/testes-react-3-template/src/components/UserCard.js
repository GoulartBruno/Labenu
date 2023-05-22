import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 3rem auto;
  background: linear-gradient(to bottom right, #f7a231, #d97b00);
`;

const CardTop = styled.section`
  display: flex;
  justify-content: space-between;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const CardNumber = styled.p`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f2f2f2;
  margin-bottom: 5px;
`;

const Value = styled.p`
  font-size: 18px;
  font-weight: normal;
`;

const UserCard = () => {
    const [ user, setUser ] = useState(null)

    useEffect(() => {
      axios.get("https://dummyjson.com/users/7")
        .then((response) => {
            setUser(response.data)
        })
    }, [])
    
  const formatCardNumber = (str) => {
    return str.match(/.{1,4}/g).join(" ")
  }

  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <CardContainer>
      <CardTop>
        <article>
          <Label>Name</Label>
          <Value>{`${user.firstName} ${user.lastName}`}</Value>
        </article>

        <article>
          <Label>Bank</Label>
          <Value>LabeBank</Value>
        </article>
      </CardTop>

      <CardNumber>{formatCardNumber(user.bank.cardNumber)}</CardNumber>
      
      <CardBottom>
        <article>
          <Label>Expires</Label>
          <Value>{user.bank.cardExpire}</Value>
        </article>

        <article>
          <Label>CVV</Label>
          <Value>***</Value>
        </article>
      </CardBottom>
    </CardContainer>
  );
};

export default UserCard;
