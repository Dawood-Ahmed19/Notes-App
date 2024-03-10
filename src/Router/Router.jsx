import { Route, Routes } from "react-router";
import Home from "../Screens/Home/Home";
import NotFound from "../Screens/NotFound/NotFound";
import NewNote from "../Screens/NewNote/NewNote";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addNewNote" element={<NewNote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
