import React from 'react';
import './modal.css'
import { setActive } from '../../utils/utils';

const Modal = ({ active,  id, children,mArray, mSetArray }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(mArray,mSetArray,id, false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
