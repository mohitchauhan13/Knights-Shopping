import { Routes, Route } from "react-router-dom";
import { Home, Shop } from "./pages";
import { NavBar } from "./components/organisms";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
