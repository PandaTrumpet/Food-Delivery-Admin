import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Add from "../src/Pages/Add/Add.jsx";
import List from "../src/Pages/List/List.jsx";
import Orders from "../src/Pages/Orders/Orders.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const url = "https://food-delivery-backend-tztj.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
