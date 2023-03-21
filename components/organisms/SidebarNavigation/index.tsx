import Link from "next/link";
import Footer from "./Footer";
import SidebarAvatar from "./SidebarAvatar";
import SidebarItem from "./SidebarItem";

const Sidebar = () => (
  <section className="sidebar">
    <div className="content pt-50 pb-30 ps-30">
      <SidebarAvatar
        avatar="/img/avatar-1.png"
        name="Username"
        email="username@gmail.com"
      />
      <div className="menus">
        <SidebarItem url="/member" title="Overview" active />
        <SidebarItem url="/" title="Transaksi" />
        <SidebarItem url="/" title="Pesan" />
        <SidebarItem url="/" title="Kartu" />
        <SidebarItem url="/" title="Rewards" />
        <SidebarItem url="/" title="Pengaturan" />
        <SidebarItem url="/" title="Log Out" />
      </div>
      <Footer />
    </div>
  </section>
);

export default Sidebar;
