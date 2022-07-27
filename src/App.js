import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Umkm from "./pages/Umkm";
import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
