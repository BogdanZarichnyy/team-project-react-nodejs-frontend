import { useState } from 'react';

import sprite from '../../images/sprite.svg';

import s from './AddNoticeButton.module.scss';

export default function AddNoticeButton() {
    const [isLogedIn, setisLoggedIn] = useState(false);

    const clickAddPetButton = (event) => {
        if (!isLogedIn) {
            alert('Please log in!')
            event.preventDefault()
            return
        }

        event.preventDefault()
        console.log('Modal is open!')
    }

    return (
        <div className={s.buttonThumb}>
            <p className={s.buttonDescription}>Add pet</p>
            <button className={s.addButton} onMouseDown={clickAddPetButton}>
                <svg className={s.addIcon}>
                    <use id="i-plusIcon5" href={`${sprite}#i-plusIcon5`} ></use>
                </svg>
            </button>            
        </div>
    )
};