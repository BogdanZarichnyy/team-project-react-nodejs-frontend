import tatuinLandskape from '../../images/notFound/tatuinLandskape.jpeg';
import image404 from '../../images/notFound/404.png';
import luke from '../../images/notFound/luke.png';
import falcon from '../../images/notFound/falcon.png';
import lukeShadow from '../../images/notFound/lukeShadow.png';
import falconShadow from '../../images/notFound/falconShadow.png';
import bigHouse from '../../images/notFound/bigHouse.png';
import smallHouse from '../../images/notFound/smallHouse.png';

import s from './NotFound.module.scss';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

const NotFound = () => {
  return (
    <>
      <div className={s.container}></div>

      <MouseParallaxContainer
        resetOnLeave
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{
          width: '100%',
          height: '425px',
        }}
      >
        <MouseParallaxChild
          factorX={0.0}
          factorY={0.2}
          className={s.tatuinLandskapeContainer}
        >
          <img src={tatuinLandskape} alt="" className={s.tatuinLandskape} />
          <div className={s.tatuinLandskapeOverlay}></div>
        </MouseParallaxChild>

        <div className="container">
          <MouseParallaxChild className={s.container + ' container'}>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.1}
              className={s.image404}
            >
              <img
                src={image404}
                alt="404 “This is not the web page you are looking for”"
                height="249"
                width="271"
              />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.1} factorY={0.1} className={s.luke}>
              <img src={luke} alt="" height="230" width="188" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              className={s.falcon}
            >
              <img
                src={falcon}
                alt=""
                // className={s.falcon}

                height="156"
                width="440"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              className={s.lukeShadow}
            >
              <img
                src={lukeShadow}
                alt=""
                // className={s.lukeShadow}

                height="49"
                width="166"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              className={s.falconShadow}
            >
              <img
                src={falconShadow}
                alt=""
                // className={s.falconShadow}

                height="75"
                width="430"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.2}
              className={s.bigHouse}
              inverted
            >
              <img
                src={bigHouse}
                alt=""
                // className={s.bigHouse}
                // data-invert="true"

                height="123"
                width="304"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.75}
              factorY={0.3}
              className={s.smallHouse}
              inverted
            >
              <img
                src={smallHouse}
                alt=""
                // className={s.smallHouse}
                // data-invert="true"

                height="50"
                width="116"
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </>
  );
};

export default NotFound;
