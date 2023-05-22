import styled from 'styled-components';

const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
`;

const Price = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const BuyBtn = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #4285f4;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3367d6;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.3);
    }
`

function ProductCard({
    product,
    addToCart
}) {
    return (
        <Container key={product.id}>
            <Image src={product.image} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>${product.price.toFixed(2)}</Price>
            <BuyBtn onClick={() => addToCart(product)}>Buy</BuyBtn>
        </Container>
    );
}

export default ProductCard;
