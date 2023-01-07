import { useState, useEffect } from 'react';

import s from './NoticesCategoriesList.module.scss';
import { ModalProvider } from '../../ModalRework';

import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';

export default function NoticeCategoriesList({categoryType}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        if (categoryType === 'for-free') {
            fetch(
            'https://test-team-project-react-nodejs-production.up.railway.app/api/ads'
            )
            .then(res => res.json())
            .then(
            result => {
            setIsLoaded(true);
            setNotices(result);
            },
            error => {
            setIsLoaded(true);
            setError(error);
            }
        )
        } else if (categoryType === 'sell') {
            fetch(
            'https://test-team-project-react-nodejs-production.up.railway.app/api/ads?category=sale'
            )
            .then(res => res.json())
            .then(
            result => {
            setIsLoaded(true);
            setNotices(result);
            },
            error => {
            setIsLoaded(true);
            setError(error);
            }
        )
        } else if (categoryType === 'lost-found') { 
            fetch(
                'https://test-team-project-react-nodejs-production.up.railway.app/api/ads?category=lostFound'
            )
            .then(res => res.json())
            .then(
            result => {
            setIsLoaded(true);
            setNotices(result);
            },
            error => {
            setIsLoaded(true);
            setError(error);
            }
        )
        }
        
        
    }, [categoryType]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className={s.loading}>Loading...</div>;
    } else {
        return (
            <ul className={s.noticeList}> 
                <ModalProvider>  
                    {notices.map(notice => {
                        return (
                            <NoticesCategoriesItem notice={notice} key={notice._id} />
                        )
                    })}                    
                </ModalProvider>
            </ul>
        )
    }
}