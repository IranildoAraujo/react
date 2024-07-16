import React, { useMemo } from "react";
import { PatherProps } from "../Pather";
import './style.css';

interface CalculatorProps extends PatherProps{
}

const Calculator: React.FC<CalculatorProps> = (props) => {
    const {productsDTO} = props;
    const valoresMemo = useMemo(() => {
        return productsDTO.reduce((a, b) => a + b.price, 0);
    }, [productsDTO]);

    return (
        <div className="soma">
            <h3>Soma</h3>
                <h3>
                    {valoresMemo}
                </h3>
        </div>
    );
};

export default Calculator;