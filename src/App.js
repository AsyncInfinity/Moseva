import React, { Component } from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";



import Navbar from "./components/layout/Navbar";

import Landing from "./components/layout/Landing";



import HospitalLogin from "./components/Login/HospitalLogin";
import SuperLogin from "./components/Login/SuperLogin";
import AdminLogin from "./components/Login/AdminLogin";
import DoctorHome from "./components/Doctor/Dashboard";
import AssitantHome from "./components/Assitant/Main";
import MedicineStore from "./components/medicineStore/Home";

import PatientProfile from "./components/Doctor/PatientOne";
import DashboardSuper from "./components/superUser/Dashboard";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="root">
            <Navbar />

            <Route exact path="/" component={Landing} />
            <Route exact path="/hospital" component={HospitalLogin} />
            <Route exact path="/super" component={SuperLogin} />
            <Route exact path="/admin" component={AdminLogin} />

            <Route path="/doctor" component={DoctorHome} />
            <Route path="/assistant" component={AssitantHome} />
            <Route path="/medicineStore" component={MedicineStore} />
            <Route path="/patient/:id" component={PatientProfile} />
            <Route path="/dashboard" component={DashboardSuper} />
         
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
