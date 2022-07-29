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
import TambahBerita from "./pages/TambahBerita";
import TambahUmkm from "./pages/TambahUmkm";
import ListBerita from "./pages/ListBerita";
import ListUmkm from "./pages/ListUmkm";
import EditBerita from "./pages/EditBerita";
import EditUmkm from "./pages/EditUmkm";

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
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/tambahberita"
          element={
            <Protected>
              <TambahBerita />
            </Protected>
          }
        />
        <Route
          path="/tambahumkm"
          element={
            <Protected>
              <TambahUmkm />
            </Protected>
          }
        />
        <Route
          path="/listberita"
          element={
            <Protected>
              <ListBerita />
            </Protected>
          }
        />
        <Route
          path="/listumkm"
          element={
            <Protected>
              <ListUmkm />
            </Protected>
          }
        />
        <Route
          path="/editberita/:id"
          element={
            <Protected>
              <EditBerita />
            </Protected>
          }
        />
        <Route
          path="/editumkm/:id"
          element={
            <Protected>
              <EditUmkm />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
