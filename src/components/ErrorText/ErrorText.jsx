import classNames from 'classnames';
import s from './ErrorText.module.scss';
const ErrorText = ({ text, styles = {} }) => {
  return <p className={classNames(s.text, styles)}>{text}</p>;
};
export default ErrorText;
