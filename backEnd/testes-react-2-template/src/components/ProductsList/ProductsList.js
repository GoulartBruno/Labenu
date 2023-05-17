import styled from 'styled-components';
import ProductCard from './ProductCard';

const Content = styled.div`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

function ProductsList({ products, addToCart }) {
    return (
        <section>
            <h2>Products</h2>

            <Content>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </Content>
        </section>
    );
}

export default ProductsList;
