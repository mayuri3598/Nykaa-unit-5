import logo from './logo.svg';
import './App.css';
import  { useEffect } from "react";
// import { Checkout } from './Components/CheckOut/Checkout';
import { Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCartData, getData, showItem } from "./Redux/action";
import { Checkout } from "./Components/CheckOut/Checkout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getCartData());
    dispatch(showItem());
}, []);
  return (
    <div className="App">
  <Routes>
                {/* <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Appliances"} element={<ProductsPage />}></Route>
                <Route path={"/item/:id"} element={<Item />}></Route> */}
                <Route path={"/checkout"} element={<Checkout />}></Route>
                {/* <Route path={"/thankyou"} element={<ThankYou />}></Route> */}
            </Routes>
    </div>
  );
}

export default App;
