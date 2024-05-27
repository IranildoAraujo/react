import React from 'react';
import './style.css';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    nome: string;
    preco: number;
}

export const Item: React.FC<Props> = (props) => {
    const {nome, preco, ...paragraph} = props;
return(
    <div className='item'>
        <div>
            <p>{nome}</p>
        </div>
        <div className='preco'>
            <p>{preco}</p>
        </div>
    </div>
);
};