/* eslint-disable no-undef */
import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/Form.css";

const Form = ({ setOpenModal }) => {
  const { addPlate, item } = useContext(AppContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const plate = {
      id: item.length + 1,
      title: data.get("title"),
      description: data.get("description"),
      completed: false,
    };
    addPlate(plate);
    form.reset();
    setOpenModal(false);
  };

  return (
    <div className="ModalBackground">
      <div className="form">
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input type="text" name="title" placeholder="name" />
          </label>
          <label>
            Description:
            <textarea name="description" placeholder="description" />
          </label>
          <div className="PlateForm-buttonContainer">
            <button
              className="PlateForm-button PlateForm-button--add"
              type="submit"
            >
              Create
            </button>
            <button
              className="PlateForm-button PlateForm-button--cancel"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
