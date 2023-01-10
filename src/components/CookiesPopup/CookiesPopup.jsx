import style from './CookiesPopup.module.scss';

const CookiesPopup = () => {
  const addCookieBarSeen = () => {
    document.cookie = 'cookieBarSeen=true; expires=' + new Date(2025, 0, 1);
  };

  return (
    <section className={style.cookiePopupWrapper} id="cookiePopupWrapper">
      <button
        className={style.cookiesBarClose}
        onClick={() => {
          addCookieBarSeen();
          document.getElementById('cookiePopupWrapper').style.display = 'none';
        }}
      >
        Accept and Close
      </button>
      <p className={style.message}>
        This site uses cookies. You can change the cookies settings in your
        browser.{' '}
        <a
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          target="_blank"
          className={style.messageLink}
          rel="noreferrer"
        >
          Learn more
        </a>
        .
      </p>
    </section>
  );
};

export default CookiesPopup;
