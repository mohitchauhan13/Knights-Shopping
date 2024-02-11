import { Routes, Route } from "react-router-dom";
import { Home, Shop } from "./pages";
import { NavBar } from "./components/organisms";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
