import IconComponent from '../../IconComponent';

import s from './ModalNotice.module.scss';
import img from '../../../images/about.png';

export default function ModalNotice({ isAddedTofavorite, onClick }) {

    return (
        <>
            <div className={s.modalThumb}>
                <div className={s.modalInfoWrapper}>
                    <div className={s.noticeThumb}>
                        <img className={s.noticeImage} src={img} alt="Pet"/>
                        <p className={s.categoryType}>In good hands</p>                    
                    </div>
                    <div className={s.noticeDecription}>
                        <h3 className={s.noticeTitle}>Сute dog looking for a home</h3>
                        <ul className={s.petInfoList}>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Name:</p>
                                <p className={s.petInfoLValue}>Rich</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Birthday:</p>
                                <p className={s.petInfoLValue}>21.09.2020</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Breed:</p>
                                <p className={s.petInfoLValue}>Pomeranian</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Location:</p>
                                <p className={s.petInfoLValue}>Lviv</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>The sex:</p>
                                <p className={s.petInfoLValue}>male</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Email:</p>
                                <p className={s.petInfoLValue}>user@mail.com</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Phone:</p>
                                <p className={s.petInfoLValue}>+380971234567</p>
                            </li>
                        </ul>
                    </div>                    
                </div>               
                <p className={s.petInfoLTypeComment}>Comments: <span className={s.petInfoLValueComment}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem</span></p>
                <div className={s.noticeButtonsThumb}>
                    <a className={s.noticeContactButton} href="tell:+380971234567">Contact</a>
                    <button className={s.noticeFavoriteButton} onClick={onClick}> {isAddedTofavorite ? 'Remove from' : 'Add to'}
                        <IconComponent classname={s.favoriteIcon} iconname="favoriteIcon"/>
                    </button>
                </div>
            </div>            
        </>        
    )
}