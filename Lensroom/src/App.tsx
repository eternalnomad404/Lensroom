import { Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile3 from "./Pages/Profile3";
import Booking from "./Pages/Booking";

function App() {
  return (
    <Routes>
      <Route path="/profile3" element={<Profile3 />} />
      <Route path="/booking" element={<Booking/>} />
    </Routes>
  );
}

export default App;
