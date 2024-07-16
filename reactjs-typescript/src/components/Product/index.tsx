import React from 'react';
// import { useGetProducts } from '../Pather'; //TODO: usando Context API
import './style.css';
import { useAppSelector } from '../../store/hooks';

const Product: React.FC = () => {
    //TODO: usando Context API const productsDTO = useGetProducts();

    //TODO: usando Redux 
    const productsDTO = useAppSelector(state => state.productStore.productsDTO);
    return (
        <div className={'product'}>
            <h3>Produtos</h3>
            {productsDTO.length > 0 && productsDTO.map((p,index) =>
                <p key={index}>{p.title}</p>
            )}
        </div>
    );
};

export default Product;