import React from 'react';
import './PicItem.css';

function PicItem(props) {
    return (
        <>
            <li className='pics__item'>

                    <figure className='pics__item__pic-wrap' data-category={props.label}>

                        <img 
                        src={props.src} 
                        alt='cvImage' 
                        className='pics__item__img' 
                        />

                    </figure>
                    
            </li>
        </>
    );
}

export default PicItem;