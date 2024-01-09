import React from "react";
import "../public/css/header.css"
function Header() {
    return (
        <header className="bg-color-ffffff w100">
            <div className="container">
             <div className="headerSection dFlex">   
            <div className="headerpayment-box w100">
                <p>Payments</p>
                <a href="#"><img src="../../../img/icon/help.png"/>How it works</a>
            </div>
            <div className="headerSearch w100">
                <form className="positionRelative">
                    <input type="text" placeholder="Search features, tutorials, etc."/>
                    <img src="../../../img/icon/search.png"/>
                </form>
            </div>
            <div className="headerMsgarrow w100">
                <ul>
                    <li><img src="../../../img/icon/group.png"/></li>
                    <li><img src="../../../img/icon/menu.png"/></li>
                </ul>
            </div>
            </div>
            </div>
        </header>
    );
};
export default Header;