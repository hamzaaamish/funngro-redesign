import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Teen from "./pages/Teen";
import Company from "./pages/Company";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Teen />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </>
  );
}

export default App;