import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/PlateCounter.css";

const TodoCounter = () => {
  const { totalPlates, completedPlates } = useContext(AppContext);
  return <h2 className="PlateCounter">{`menu of the day ${totalPlates}`}</h2>;
};

export default TodoCounter;
