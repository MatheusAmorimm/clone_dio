import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import SignUp from "./pages/SignUp/SignUp";

export default function App() {
  return (
    <Router>
     <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/feed" element = {<Feed/>} />
      <Route path = "/signup" element = {<SignUp/>} />
     </Routes>
    </Router>
  );
}


