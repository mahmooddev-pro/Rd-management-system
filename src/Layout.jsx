import Home from "./Home.jsx";
import MyNav from "./MyNav.jsx";
import About from "./About.jsx";
import Contect from "./Contect.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./login.jsx";

import Rduser from "./Rduser.jsx";
import Rules from "./Rules.jsx";


function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <MyNav />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abt" element={<About />} />
        <Route path="/cnt" element={<Contect />} />
       
        <Route path="/rduser"   element={<Rduser/>} />
         <Route path="/rules" element={<Rules />} />
      </Routes>
    </>
  );
}
export default Layout;
