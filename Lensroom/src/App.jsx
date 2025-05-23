import { Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Booking from "./Pages/Booking";
import Profile3 from "./Pages/Profile3";

function App() {
  return (
    <Routes>
      <Route path="/profile3" element={<Profile3/>} />
      <Route path="/booking" element={<Booking/>} />
    </Routes>
  );
}

export default App;
