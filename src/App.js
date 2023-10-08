import logo from './logo.svg';
import { Login } from './screens/Login/Login';
import { Register } from './screens/Register/Register';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { CustomerName } from './screens/CustomerName/CustomerName'
import { RfqAttributes } from './screens/RfqAttributes';
import { NewProductDev } from './screens/NewProductDev/NewProductDev';
import { Frame } from './screens/Frame/Frame';
import { Element } from './screens/Element/Element'
import { BrowserRouter as Router, Route, Routes, Route as Rte } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
    <NavBar />
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/customername" element={<CustomerName/>} />
        <Route path="/rfqattributes" element={<RfqAttributes/>} />
        <Route path="/newproductdev" element={<NewProductDev/>} />
        <Route path="/frame" element={<Frame/>} />
        <Route path="/element" element={<Element/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
