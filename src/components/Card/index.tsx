import React from 'react';
import './style.css';

interface Props {
    texto: string;
    cor: string; 
    tamanho: number; 
}

export const Card: React.FC<Props> = (props) => {
    const { texto, cor, tamanho } = props;
    return (
        <div className={`card ${cor}`} style={{ '--card-height': `${tamanho}vh` } as React.CSSProperties}> 
            <p>{texto}</p>
        </div>
    );
};