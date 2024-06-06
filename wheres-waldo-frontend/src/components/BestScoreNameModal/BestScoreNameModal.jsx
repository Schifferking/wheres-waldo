import { useEffect, useRef, useState } from "react";
import styles from "./BestScoreNameModal.module.css";
import Modal from "../Modal/Modal";

const initialBestScoreNameModal = {
  name: "",
};

const BestScoreNameModal = ({ isOpen, onSubmit, onClose }) => {
  const focusInputRef = useRef(null);
  const [formState, setFormState] = useState(initialBestScoreNameModal);

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    setFormState(initialBestScoreNameModal);
  };

  return (
    <Modal hasCloseButton={true} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            ref={focusInputRef}
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

// to-do
// add proptypes

export default BestScoreNameModal;
