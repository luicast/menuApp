import { useContext } from "react";
import AppContext from "../context/AppContext";
import { GiMeal } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "../styles/PlateItem.css";

const PlateItem = ({ plate }) => {
  const { removePlate, plateCompleted } = useContext(AppContext);

  const onComplete = () => {
    plateCompleted(plate.id);
  };

  const onDelete = () => {
    removePlate(plate.id);
  };

  return (
    <li className="animate__animated animate__fadeInLeft PlateItem">
      <span
        className={`Icon Icon-check ${plate.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <GiMeal />
      </span>
      <div>
        <p
          className={`PlateItem-p1 ${
            plate.completed && "PlateItem-p--complete"
          }`}
        >
          {plate.title}
        </p>
        <p
          className={`PlateItem-p2 ${
            plate.completed && "PlateItem-p--complete"
          }`}
        >
          {plate.description}
        </p>
      </div>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <ImCross />
      </span>
    </li>
  );
};

export default PlateItem;
