import { Routes, Route } from "react-router-dom";
import { Home, Shop, Authentication, Checkout } from "./pages";
import { NavBar } from "./components/organisms";

import "./App.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createUserInDB, onAuthStateChangedListener } from "./utils/firebase";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserInDB(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, [dispatch]);
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
