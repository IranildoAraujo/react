import React from 'react';
import './style.css'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    labelHeader: string;
}

const Modal: React.FC<Props> = (props) => {
    const {labelHeader, children} = props;

    return (
        <div>
            <p>{labelHeader}</p>
            {children}
        </div>
    );
}

export default Modal;