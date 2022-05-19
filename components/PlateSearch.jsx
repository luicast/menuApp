import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/PlateSearch.css";

const PlateSearch = () => {
  const { handleSearch, searchValue } = useContext(AppContext);
  return (
    <input
      className="PlateSearch"
      type="text"
      placeholder="Search Dinner Plate"
      value={searchValue}
      onChange={handleSearch}
    />
  );
};

export default PlateSearch;
