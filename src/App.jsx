import PlateCounter from "../components/PlateCounter";
import PlateSearch from "../components/PlateSearch";
import PlateList from "../container/PlateList";
import CreatePlateButton from "../components/CreatePlateButton";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";
import { useState } from "react";
import Modal from "../container/Modal";
import Form from "../components/Form";

const App = () => {
  const initialState = useInitialState();
  const [openModal, setOpenModal] = useState(false);
  return (
    <AppContext.Provider value={initialState}>
      <PlateCounter />
      <PlateSearch />
      <PlateList />
      {openModal && <Modal component={<Form setOpenModal={setOpenModal} />} />}
      <CreatePlateButton setOpenModal={setOpenModal} openModal={openModal} />
    </AppContext.Provider>
  );
};

export default App;
