import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>

                <Link className='cards__item__link' to={props.path} target="_blank">
                    <figure className='cards__item__pic-wrap' data-category={props.label}> 
                        <img 
                        src={props.src} 
                        alt='ProjectImage' 
                        className='cards__item__img' 
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h10 className='cards__item__text1'>
                            {props.text}
                        </h10>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
