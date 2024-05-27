import React from 'react';
import './style.css'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    btnText: string;
}

const ButtonCustom: React.FC<Props> = (props) => {
    const {btnText,...buttonProps} = props;
    return(
        <button {...buttonProps} className={'ButtonCustom'}> {btnText} </button>
    );
};

export default ButtonCustom;