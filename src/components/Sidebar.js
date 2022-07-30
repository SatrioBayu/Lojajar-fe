import styles from "../assets/css/Sidebar.module.css";
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter } from "cdbreact";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className={styles.main}>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>Menu</CDBSidebarMenuItem>
            <a href="/dashboard">
              <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            </a>
            <a className="dropdown">
              <CDBSidebarMenuItem icon="newspaper">
                <p className={`dropdown-toggle ${styles.p}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Artikel
                </p>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/tambahberita">
                      Tambah Berita
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/listberita">
                      List Berita
                    </a>
                  </li>
                </ul>
              </CDBSidebarMenuItem>
            </a>
            <a className="dropdown">
              <CDBSidebarMenuItem icon="store" iconType="solid">
                <p className={`dropdown-toggle ${styles.p}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  UMKM
                </p>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/tambahumkm">
                      Tambah UMKM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/listumkm">
                      List UMKM
                    </a>
                  </li>
                </ul>
              </CDBSidebarMenuItem>
            </a>
            <CDBSidebarMenuItem>Akun</CDBSidebarMenuItem>
            <a href="#" onClick={handleLogout}>
              <CDBSidebarMenuItem icon="sign-out-alt" className="text">
                Signout
              </CDBSidebarMenuItem>
            </a>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
