import { useModal } from '../ModalCustom/ModalCustom';

const AddPetModal = e => {
  const { handleToggle } = useModal();
  const handeleFormSubmit = () => {
    handleToggle();
  };

  return (
    <div>
      <form>
        <h1>Add pet</h1>
        <input></input>
        <input></input>
        <input></input>
        <button type="button">Next</button>
        <button type="button" onClick={handeleFormSubmit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddPetModal;
