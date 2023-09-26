import React from "react";
import { Routes, Route } from "react-router-dom";
import Success from './pages/Success'
import Customize from "./pages/Customize";
// import ChatBox from "./pages/ChatBox";
import Payment from './components/Payment'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Packages from "./pages/Packages";
import Explore from './pages/Explore'
import AnotherPage from "./components/AnotherPage";
import {MasterPlan} from "./pages/MasterPlan";
import CruisesPage from "./pages/CruisesPage";
import ExBangalore from "./pages/ExBangalore";
import ExDarjeling from "./pages/ExDarjeling";
import ExHong from "./pages/ExHong";

function App() {
  return (
    <div>
      {/* <ExBangalore/> */}
      {/* <ExDarjeling/> */}
      {/* <ExHong/> */}
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customize" element={<Customize />} />
        <Route path="master-plan" element={<MasterPlan />} />
        <Route path="home" element={<Home />} />
        <Route path="package" element={<Packages />} />
        <Route path="explore" element={<Explore/>} />
        <Route path="cruises" element={<CruisesPage/>}/>
        <Route path="bang" element={<ExBangalore/>}/>
        <Route path="dargg" element={<ExDarjeling/>}/>
        <Route path="hongg" element={<ExHong/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="success" element={<Success/>}/>
        <Route path="/anotherPage/:name/:email/:destination/:noOfPersons"  element={<AnotherPage/>}/>
        <Route path="/paymentPage/:Net" element={<Payment/>}/>
      </Routes>
      {/*  */}
      {/* <Banga /> */}
     

      {/* <Location /> */}
      {/* <Customize /> */}
    </div>
  );
}

export default App;
