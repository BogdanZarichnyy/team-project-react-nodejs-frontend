import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './NoticesCategoriesNav.module.scss';

export default function NoticesCategoriesNav() {
    const [isLogedIn, setisLoggedIn] = useState(true);

    return (
        <nav className={s.noticesNavigation}> 
            <ul className={s.noticesList}>
                <li className={s.noticesListItem}>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                        to="/notices/lost-found">
                        lost/found
                    </NavLink>
                </li>
                <li className={s.noticesListItem}>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                        to="/notices/for-free">
                        in good hands
                    </NavLink>
                </li>
                <li className={s.noticesListItem}>
                    <NavLink
                        className={({ isActive }) => (isActive ? s.noticesLinkCurrent : s.noticesLink)}
                        to="/notices/sell">
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