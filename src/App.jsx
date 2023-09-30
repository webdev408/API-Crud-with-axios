import { Routes, Route } from "react-router-dom";
import "./index.css";

import UsersList from "./components/UsersList";
import Home from "./components/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </>
  );
}
export default App;
