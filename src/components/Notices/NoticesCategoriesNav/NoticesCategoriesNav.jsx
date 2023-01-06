import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getUserTokenSelector } from '../../../store/user';

import s from './NoticesCategoriesNav.module.scss';

export default function NoticesCategoriesNav() {
    const isLogedIn = useSelector(getUserTokenSelector);

    return (
        <nav className={s.noticesNavigation}> 
            <ul className={s.noticesList}>
                <li className={s.noticesListItem}>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                        to="lost-found">
                        lost/found
                    </NavLink>
                </li>
                <li className={s.noticesListItem}>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                        to="for-free">
                        in good hands
                    </NavLink>
                </li>
                <li className={s.noticesListItem}>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                        to="sell">
                        sell
                    </NavLink>
                </li>
                {isLogedIn &&
                    <>
                        <li className={s.noticesListItem}>
                            <NavLink
                                className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                                to="/notices/favorite">
                                favorite ads
                            </NavLink>
                        </li>
                        <li className={s.noticesListItem}>
                            <NavLink
                                className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                                to="/notices/own">
                                my ads
                            </NavLink>
                        </li>
                    </>
                }                
            </ul>
        </nav>
    )
}