import React from "react";
import "../public/css/sidebar.css";
function Sidebar() {
    return (
        <aside className="bg-color-1E2640 px10 py16 sidebarSec positionRelative">
            <div className="logo-sec dFlex alignItemCenter">
                <img src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbXTfDpbx17Dm1UyWrCahHzqo902mog-y7REyL1EVX~ssIEzwHiEcj6MiIHeiOkbDRFcMpt3V-MvddqZyRBHDd-J3LkmTahxCv-UGtnU09Z3J2BfloJvJ7n8-My8RcF0WYqZ6UDqdBSium9I8xL4YyFvx4xreX-agyTnc8DLipLOn6ZANnuZqbZvpSsvyo6nPQr02YzgWu2BYAX~IzuUpJyPWDgjMwbgfHvQm7gpqsVVRXVoDqHJITXGmx4iYGsyfrawR5P-RLJ4ZNnwLYic-E7LCK2GbM-tOGgZf5OIKoUZwQMm35-HaH8YZ-MFzxSXKu~EwjGP9buXyfGZwoPdMg__"/>
                <div className="logoText positionRelative w100">
                    <p className="text-color-ffffff">Nishyan</p>
                    <a href="" className="text-color-ffffff">Visit Store</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white"/>
</svg>
                </div>
            </div>
            <nav className="menunavbar">
                <ul>
                    <li><a href="#"><img src="../../../img/icon/home.png"/>Home</a></li>
                    <li><a href="#"><img src="../../../img/icon/orders.png"/>Orders</a></li>
                    <li><a href="#"><img src="../../../img/icon/products.png"/>Products</a></li>
                    <li><a href="#"><img src="../../../img/icon/delivery.png"/>Delivery</a></li>
                    <li><a href="#"><img src="../../../img/icon/marketing.png"/>Marketing</a></li>
                    <li><a href="#"><img src="../../../img/icon/analytics.png"/>Analytics</a></li>
                    <li className="active"><a href="#"><img src="../../../img/icon/payments.png"/>Payments</a></li>
                    <li><a href="#"><img src="../../../img/icon/tools.png"/>Tools</a></li>
                    <li><a href="#"><img src="../../../img/icon/discount.png"/>Discount</a></li>
                    <li><a href="#"><img src="../../../img/icon/audience.png"/>Audience</a></li>
                    <li><a href="#"><img src="../../../img/icon/apperence.png"/>Apperence</a></li>
                    <li><a href="#"><img src="../../../img/icon/plugin.png"/>Plugins</a></li>
                </ul>
            </nav>
            <div className="walletBox dFlex alignItemsCenter">
                <img src="../../../img/icon/wallet.png"/>
                <p className="text-color-ffffff">Available credits <span>222.10</span></p>
            </div>
        </aside>
    );
};
export default Sidebar;
