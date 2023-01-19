import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ButtonBase from '../../ButtonBase/ButtonBase';
import s from '../Auth.module.scss';

const RestorePasswordContainer = ({ onResend }) => {
  const navigate = useNavigate();

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
      <h2 className={s.restorePasswordTitle}>
        Password send in your email !!!
      </h2>
      <div className={s.restorePasswordContainer}>
        <ButtonBase
          styles={s.inputBottomMargin}
          disabled={counter > 0}
          onClick={() => onResend()}
          type="button"
          text={counter === 0 ? `Resend` : `Resend ${counter} second`}
        />
        <ButtonBase
          styles={s.inputLoginBack}
          onClick={() => navigate('/login')}
          type="button"
          text="Go to login"
        />
      </div>
    </>
  );
};

export default RestorePasswordContainer;
