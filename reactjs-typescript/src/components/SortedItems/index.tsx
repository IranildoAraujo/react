import React, { useMemo } from "react";
import { PatherProps } from "../Pather";

interface SortedItemsProps extends PatherProps{
}

const SortedItems: React.FC<SortedItemsProps> = (props) => {
    const {productsDTO} = props;
    const valoresMemo = useMemo(() => {
        return productsDTO.sort((a, b) => a.price - b.price);
    }, [productsDTO]);

    return (
        <div>
            <h3>Valores memorizados</h3>
            <ul>
                {valoresMemo.map((product,index) => <li key={index}>{product.price}</li>)}
            </ul>
        </div>
    );
};

export default SortedItems;