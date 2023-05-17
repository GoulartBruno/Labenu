import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 3rem auto;
  max-width: 550px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0 1rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const ProductCard = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/6").then((response) => {
            setProductData(response.data);
        });
    }, []);

    if (!productData) {
        return <p>Loading...</p>;
    }

    const { id, title, description, price, thumbnail } = productData;

    return (
        <Container>
            <Title>{title}</Title>
            <Image src={thumbnail} alt={`Thumbnail for ${title}`} />
            <Description>{description}</Description>
            <Price>${price}</Price>
        </Container>
    );
};

export default ProductCard;
