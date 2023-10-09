import logo from './logo.svg';
import { Login } from './screens/Login/Login';
import { Register } from './screens/Register/Register';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { CustomerName } from './screens/CustomerName/CustomerName'
import { RfqAttributes } from './screens/RfqAttributes';
import { NewProductDev } from './screens/NewProductDev/NewProductDev';
import { NewProductDev1 } from './screens/NewProductDev1/NewProductDev1';
import { MachineQuality } from './screens/MachineQuality/MachineQuality';
import { DesignFoundry } from './screens/DesignFoundry';
import { RiskAnalysis } from './screens/RiskAnalysis';
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
        <Route path="/newproductdev1" element={<NewProductDev1/>} />
        <Route path="/machinequality" element={<MachineQuality/>} />
        <Route path="/designfoundry" element={<DesignFoundry/>} />
        <Route path="/riskanalysis" element={<RiskAnalysis/>} />
        <Route path="/frame" element={<Frame/>} />
        <Route path="/element" element={<Element/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
