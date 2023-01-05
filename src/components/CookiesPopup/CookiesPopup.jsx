import style from './CookiesPopup.module.scss';

const CookiesPopup = () => {
  return (
    <section className={style.popupWrapper}>
      <div className="x">
        <button className={style.cookiesBarClose}>Прийняти та Закрити</button>
        <p className={style.message}>
          Цей сайт використовує cookies. Ви можете змінити налаштування cookies
          у своєму браузері.{' '}
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target="_blank"
            className={style.messageLink}
            rel="noreferrer"
          >
            Дізнатись більше
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default CookiesPopup;
