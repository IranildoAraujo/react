import React from 'react';
import { Item } from '../Item/Item';

export const Catalogo = () => {
    const items = [
        {
            id:1,
            nome:'Abacaxi',
            preco: 3.15
        },
        {
            id:2,
            nome:'Maçã',
            preco: 5.50
        },
        {
            id:3,
            nome:'Morango',
            preco: 10.00
        }
    ];

    return(
    <div>
        {items.map((item,key) => <Item key={key} nome={item.nome} preco={item.preco} />)}
    </div>);
}