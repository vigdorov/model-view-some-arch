import React, {useState} from 'react';
import './Popper.css';

export const Popper = ({children}) => {
    const [isShow, setShow] = useState(false);

    const toggleShow = () => {
        setShow(s => !s);
    };

    return (
        <span className="Container" onClick={toggleShow}>
            {children}
            
            {isShow && (
                <div className="Menu">
                    <div className="Menu__item">number 1</div>
                    <div className="Menu__item">number 2</div>
                    <div className="Menu__item">number 3</div>
                    <div className="Menu__item">number 4</div>
                </div>
            )}
        </span>
    );
};
