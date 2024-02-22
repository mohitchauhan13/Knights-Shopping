import { Routes, Route } from "react-router-dom";
import { Home, Shop, Authentication, Checkout } from "./pages";
import { NavBar } from "./components/organisms";

import "./App.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
