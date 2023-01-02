import React from 'react';
import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.layout}>
      <div className="container">
        <h1 className={style.title}>Take good care of your small pets</h1>
      </div>
    </div>
  );
};

export default Home;