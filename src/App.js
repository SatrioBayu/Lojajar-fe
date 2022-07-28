import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Umkm from "./pages/Umkm";
import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";
import DetailUmkm from "./pages/DetailUmkm";
import Surat from "./pages/Surat";
import Protected from "./components/Protected";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
        <Route path="/umkm/:id" element={<DetailUmkm />} />
        <Route path="/permohonansurat" element={<Surat />} />

        {/* Admin */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            // <Protected>
            <Dashboard />
            // </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
