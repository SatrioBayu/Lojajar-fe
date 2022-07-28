import styles from "../assets/css/Sidebar.module.css";
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter } from "cdbreact";

const Sidebar = () => {
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
            <div class="dropdown">
              <CDBSidebarMenuItem icon="sticky-note">
                <p class={`dropdown-toggle ${styles.p}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Artikel
                </p>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/tambahberita">
                      Tambah Berita
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/listberita">
                      List Berita
                    </a>
                  </li>
                </ul>
              </CDBSidebarMenuItem>
            </div>
            <div class="dropdown">
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                <p class={`dropdown-toggle ${styles.p}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  UMKM
                </p>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="/tambahumkm">
                      Tambah UMKM
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/listumkm">
                      List UMKM
                    </a>
                  </li>
                </ul>
              </CDBSidebarMenuItem>
            </div>
            <CDBSidebarMenuItem>Akun</CDBSidebarMenuItem>
            <a href="#">
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