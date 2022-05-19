import PlateItem from "../components/PlateItem";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import LoadingBar from "../components/LoadingBar";
import "../styles/PlateList.css";

const PlateList = () => {
  const { item, searchValue, totalPlates, loading, error } =
    useContext(AppContext);
  let searchedPlates = [];
  if (!searchValue.length >= 1) {
    searchedPlates = item;
  } else {
    searchedPlates = item.filter((plate) => {
      return plate.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  const renderList = () => {
    if (loading) {
      // if loading is true, show loading
      return <LoadingBar />;
    } else if (error) {
      // if error is true, show error
      return <p>{error}</p>;
    } else if (!loading && !totalPlates) {
      // if totalPlates is empty, show Add dinner plate
      return <p>Add dinner plate</p>;
    } else if (!!totalPlates && !searchedPlates.length) {
      // if searchedPlates is empty, show no result
      return <p>no result {searchValue}</p>;
    } else {
      // if searchedPlates is not empty, show searchedToDos
      return (
        <ul>
          {searchedPlates.map((plate) => {
            return <PlateItem key={plate.id} plate={plate} />;
          })}
        </ul>
      );
    }
  };
  return <>{renderList()}</>;
};
export default PlateList;
