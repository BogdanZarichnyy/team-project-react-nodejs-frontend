import { Component } from 'react';
import s from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <div>
            <div className={s.starsec}></div>
            <div className={s.starthird}></div>
            <div className={s.starfourth}></div>
            <div className={s.starfifth}></div>
          </div>

          <div className={s.lamp__wrap}>
            <div className={s.lamp}>
              <div className={s.cable}></div>
              <div className={s.cover}></div>
              <div className={s.inCover}>
                <div className={s.bulb}></div>
              </div>
              <div className={s.light}></div>
            </div>
          </div>

          <section className={s.error}>
            <div className={s.error__content}>
              <div className={`${s.error__message} ${s.message}`}>
                <h1 className={s.message__title}>Something went wrong.</h1>
                <p className={s.message__text}>
                  We're sorry, the page you were looking for isn't found here.
                  The link you followed may either be broken or no longer
                  exists. Please try again, or take a look at our.
                </p>
              </div>
            </div>
          </section>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
