import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from './components/Index'
import AddCustomer from "./components/AddCustomer";

function App() {


  return (
  <Routes>
    <Route path="/" element={<Index/>} />
    <Route path="/addcustomer" element={<AddCustomer/>} />
  </Routes>
  );
}

export default App;
