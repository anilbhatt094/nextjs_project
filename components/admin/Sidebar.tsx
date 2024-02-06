import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "../../public/css/admin/sidebar.css";
function Sidebar() {
  const router = useRouter();

  return (
    <aside className="bg-thrimary-color px10 py15 sidebarSec">
      <div className="logo-sec dFlex alignItemCenter">
        <img src="../../../img/admin/logo.jpg" />
        <div className="logoText positionRelative w100">
          <p className="text-formary-color">Company Name</p>
          <a href="" className="text-formary-color">
            Visit Store
          </a>
          
        </div>
      </div>
      <nav className="menunavbar">
        <ul>
          <li className={router.pathname === "/admin" ? "active" : ""}>
            <Link href="/admin">
             
              Dashboard
            </Link>
          </li>
          <li className={router.pathname === "/admin/menu" ? "active" : ""}>
            <Link href="/admin/menu">
              Menu
            </Link>
          </li>
          <li
            className={router.pathname === "/admin/banner" ? "active" : ""}
          >
            <Link href="/admin/banner">
               Banner Panel
            </Link>
          </li>
          <li className={router.pathname === "/admin/orders" ? "active" : ""}>
            <Link href="/admin/orders">
            
              Packages
            </Link>
          </li>
         
         
          <li
            className={router.pathname === "/admin/currency" ? "active" : ""}
          >
            <Link href="currency">
              Currency
            </Link>
          </li>
          <li className={router.pathname === "/admin/language" ? "active" : ""}>
            <Link href="/admin/language">
             Language
            </Link>
          </li>
          <li className={router.pathname === "/admin/tools" ? "active" : ""}>
            <Link href="/admin/tools">
             Tools
            </Link>
          </li>
          <li className={router.pathname === "/admin/discount" ? "active" : ""}>
            <Link href="/admin/discount">
              Discount
            </Link>
          </li>
          <li className={router.pathname === "/admin/audience" ? "active" : ""}>
            <Link href="/admin/audience">
              Audience
            </Link>
          </li>
          <li
            className={router.pathname === "/admin/apperence" ? "active" : ""}
          >
            <Link href="/admin/apperance">
              Apperence
            </Link>
          </li>
          <li className={router.pathname === "/admin/setting" ? "active" : ""}>
            <Link href="/admin/setting">
            Setting
            </Link>
          </li>
          <li className={router.pathname === "/admin/plugins" ? "active" : ""}>
            <Link href="/admin/plugins">
              Plugins
            </Link>
          </li>
        </ul>
      </nav>
      <div className="walletBox dFlex alignItemsCenter">
        <img src="../../../img/icon/wallet.png" />
        <p className="text-formary-color">
          Available credits <span>222.10</span>
        </p>
      </div>
    </aside>
  );
}
export default Sidebar;
