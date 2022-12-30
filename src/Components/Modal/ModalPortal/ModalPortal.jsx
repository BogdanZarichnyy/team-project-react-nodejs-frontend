import ReactDOM from 'react-dom';

const ModalPortal = props => {
  const modalRef = document.getElementById('modal');
  return ReactDOM.createPortal(props.children, modalRef);
};

export default ModalPortal;
