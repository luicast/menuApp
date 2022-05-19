import "../styles/CreatePlateButton.css";

const CreatePlateButton = ({ openModal, setOpenModal }) => {
  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className="CreatePlateButton" onClick={handleClick}>
      +
    </button>
  );
};

export default CreatePlateButton;
