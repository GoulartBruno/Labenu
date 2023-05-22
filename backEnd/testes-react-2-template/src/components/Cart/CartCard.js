import styled from 'styled-components';

const Container = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;

    > div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        padding-left: 8px;

        > div {
            display: flex;
            justify-content: space-between;
        }
    }
`;

const Image = styled.img`
    height: 100px;
    object-fit: contain;
`;

const Price = styled.span``;

const Quantity = styled.span``;

const RemoveBtn = styled.button`
    display: inline-block;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #f25252;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #cc3d3d;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.3);
    }
`

function CartCard({
    product,
    removeFromCart
}) {
    return (
        <Container key={product.id}>
            <Image src={product.image} alt={product.title} />
            <div>
                <h3>{product.title}</h3>

                <div>
                    <Price>${product.price.toFixed(2)}</Price>
                    <Quantity>x{product.quantity}</Quantity>
                    <RemoveBtn onClick={() => removeFromCart(product)}>Remove</RemoveBtn>
                </div>
            </div>
        </Container>
    );
}

export default CartCard;
