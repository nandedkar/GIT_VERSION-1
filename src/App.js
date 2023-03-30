import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greet from "./component/Greet";
import Layout from "./component/Layout";
import User from "./component/User";
import Vehicle from "./component/Veichle";
import "./App.css";

//Routing
function App() {
  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user/:number" element={<User />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="*" element={<h3>No Page available</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
