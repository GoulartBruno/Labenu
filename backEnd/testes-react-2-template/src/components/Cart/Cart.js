import styled from 'styled-components';
import CartCard from './CartCard';

const CartWrapper = styled.section`
    width: 400px;
    border-left: 2px solid lightgrey;
    padding-left: 16px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
`;

const Total = styled.h4`
    text-align: end;
    font-size: 32px;
`

const CartIsEmpty = styled.h5`
    background-color: lightblue;
    padding: 16px;
    font-size: 16px;
    font-weight: normal;
`

function Cart({ cart, removeFromCart }) {

    const calculateTotal = () => cart
        .reduce((acc, curr) => (acc + (curr.price * curr.quantity)),0)
        .toFixed(2)

    return (
        <CartWrapper>
            <h2>Cart</h2>

            <Container>
                {cart.length > 0 ?
                    cart.map(product => (
                        <CartCard
                            key={product.id}
                            product={product}
                            removeFromCart={removeFromCart}
                        />
                    ))
                    : <CartIsEmpty>Cart is empty</CartIsEmpty>}
            </Container>

            <Total>Total: ${calculateTotal()}</Total>
        </CartWrapper>

    );
}

export default Cart;
