
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Layout } from './user/Layout';
import { Home } from './user/home/Home';
import { Contact } from './user/contact/Contact';
import { Nopage } from './user/Nopage';
import { About } from "./user/about/About";
import { Login } from "./user/login/Login";
import { Registration } from "./user/registration/Registration";

//admin
import PrivateRoute from "./Privateroute";
import DashLayout from "./admin/DashLayout";
import DashHome from "./admin/pages/DashHome";
import AddProducts from "./admin/pages/AddProducts";
import User from "./admin/pages/User";
import { UserDetails } from "./user/UserDetails";
import { Editprofile } from "./user/Editprofile";
import Card from "./user/pages/Card";
import Doctor from "./user/about/Doctor";
import StemCell from "./user/pages/service/StemCell";
import Vitamin from "./user/pages/service/Vitamin";
import OzonTherapy from "./user/pages/service/OzonTherapy";
import HoustonChiropractor from "./user/pages/service/HoustonChiropractor";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to My React App</h1>
      <FaReact size={320} color="blue" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
           
            <Route path="userDetails" element={<UserDetails />} />
            <Route path="editprofile" element={<Editprofile />} />
            <Route path="membership-facilities" element={<Card />} />
            <Route path="doctor" element={<Doctor />} />
            <Route path="stemcell" element={<StemCell />} />
            <Route path="vitamin-shots" element={<Vitamin/>} />
            <Route path="ozone-therapies" element={<OzonTherapy/>} />
            <Route path="houston-chiropractor" element={<HoustonChiropractor/>} />
            <Route path="*" element={<Nopage />} />
          </Route>
          <Route path="dashboard" element={
            <PrivateRoute>
              <DashLayout />
            </PrivateRoute>
          }>
            <Route index element={<DashHome />} />
            <Route path="add-product" element={<AddProducts />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
