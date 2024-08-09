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
import EditFood from "./screen/EditFood";
import AdminPrivateRoutes from "./screen/AdminPrivateRoutes";
import UserPrivateRoute from "./screen/UserPrivateRoute";
import IsAdmin from "./screen/IsAdmin";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />        
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/cart" element={<Cart />} />

        <Route element={<UserPrivateRoute />}>
          <Route path="/cart/confirm" element={<Cart />} />
        </Route>

        <Route path="/no/permission" element={<IsAdmin />} />
        <Route path="/admin/*" element={<AdminPrivateRoutes />}>
          <Route index element={<UserList />} />
          <Route path="food/list" element={<FoodList/>} />
          <Route path="add/new/food" element={<AddFood />} />
          <Route path="orders/list" element={<OrdersList />} />
          <Route path="edit/food/:id" element={<EditFood/>} />
        </Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
