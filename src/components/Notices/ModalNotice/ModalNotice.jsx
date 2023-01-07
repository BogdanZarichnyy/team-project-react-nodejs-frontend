import moment from 'moment';

import IconComponent from '../../IconComponent';

import s from './ModalNotice.module.scss';
import defaultImage from '../../../images/defaultImage.png';

export default function ModalNotice({ notice, onClick }) {


    return (
        <>
            <div className={s.modalThumb}>
                <div className={s.modalInfoWrapper}>
                    <div className={s.noticeThumb}>
                        <img className={s.noticeImage} src={notice.photo === '' ? defaultImage : notice.photo} alt="Pet"/>
                        <p className={s.categoryType}>{notice.category}</p>                    
                    </div>
                    <div className={s.noticeDecription}>
                        <h3 className={s.noticeTitle}>{notice.addTitle}</h3>
                        <ul className={s.petInfoList}>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Name:</p>
                                <p className={s.petInfoLValue}>{notice.name}</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Birthday:</p>
                                <p className={s.petInfoLValue}>{moment(notice.birthDate).format('DD.MM.YYYY')}</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Species:</p>
                                <p className={s.petInfoLValue}>{notice.family}</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Breed:</p>
                                <p className={s.petInfoLValue}>{notice.breed}</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Location:</p>
                                <p className={s.petInfoLValue}>{notice.location}</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>The sex:</p>
                                <p className={s.petInfoLValue}>{notice.sex}</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Passport:</p>
                                <p className={s.petInfoLValueLink}><a className={s.petInfoLValueLink} href={notice.passport}>View file</a></p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Email:</p>
                                <p className={s.petInfoLValue}>{notice.owner.email}</p>
                            </li>
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Phone:</p>
                                <p className={s.petInfoLValue}>{notice.owner.phone}</p>
                            </li>
                            {notice.price === '' && 
                                <li className={s.petInfoLItem}>
                                    <p className={s.petInfoLType}>Sell:</p>
                                    <p className={s.petInfoLValue}>{notice.price} $</p>
                                </li>
                            } 
                        </ul>
                    </div>                    
                </div>
                {notice.comments !== '' && 
                    <p className={s.petInfoLTypeComment}>Comments: <span className={s.petInfoLValueComment}>{notice.comments}</span></p>
                }                
                <div className={s.noticeButtonsThumb}>
                    <a className={s.noticeContactButton} href={`tell:${notice.owner.phone}`}>Contact</a>
                    <button className={s.noticeFavoriteButton} onClick={onClick}>Add to
                        <IconComponent classname={s.favoriteIcon} iconname="favoriteIcon"/>
                    </button>
                </div>
            </div>            
        </>        
    )
}