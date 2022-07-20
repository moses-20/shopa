import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";

function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RoutePages;
