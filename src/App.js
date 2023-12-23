import "./App.css";
import Navbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Cart from "./screen/Cart";
import RegisterScreen from "./screen/RegisterScreen";
import LoginScreen from "./screen/LoginScreen";

import "bootstrap";
import OrderScreen from "./screen/OrderScreen";
import AdminScreen from "./screen/AdminScreen";
import UserList from "./screen/UserList";
import OrdersList from "./screen/OrdersList";
import AddFood from "./screen/AddFood";
import FoodList from "./screen/FoodList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/user/list" element={<UserList />} />
        <Route path="/admin/orders/list" element={<OrdersList />} />
        <Route path="/admin/add/new/food" element={<AddFood />} />
        <Route path="/admin/food/list" element={<FoodList />} />
      </Routes>
    </div>
  );
}

export default App;
