import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../ButtonBase/ButtonBase';

const RestorePasswordContainer = ({ onResend }) => {
  const navigate = useNavigate();

  const isResendPassword = () => {
    onResend();
  };

  const isNavigateLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h3>Password send in your email !!!</h3>
      <div>
        <ButtonBase onClick={isResendPassword} type="button" text="Resend" />
        <ButtonBase
          onClick={isNavigateLogin}
          type="button"
          text="Go to login"
        />
      </div>
    </div>
  );
};

export default RestorePasswordContainer;
