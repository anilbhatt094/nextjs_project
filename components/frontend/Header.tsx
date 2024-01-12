import React, {useState} from "react";
import "../../public/css/frontend/header.css";
function Header() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index:number) => {setActiveTab(index);};
    return (
        <header className="w100">
          <div className="topbar bg-primary-color textCenter py10">
            <p className="text-seconday-color fontweight400 seconday-font">Welcome to My Holiday | Live to discover</p>
          </div>
          <div className="mainHeader borderBottom">
            <div className="container">
              <div className="dFlex w100 alignItemCenter justifyContentBetween">
            <div className="headerLogo">
            <img src="https://c.myholidays.com/cms/images/theme/myholiday_logo.svg"/>  
            </div>
            <div className="menuNavbar dFlex gap50">
              <ul className="dFlex gap35">
                <li className="positionRelative">Holiday Packages <i className="arrow down"></i>
                <div className="menuDropdown">
                  <div className="menuDropdownbox">
                  <a href="#">Switzerland</a>
                  <a href="#">Georgia</a>
                  <a href="#">Paris</a>
                  <a href="#">Thailand</a>
                  <a href="#">Dubai</a>
                  </div>
                </div>
                </li>
                <li className="positionRelative">Honymoon Packages <i className="arrow down"></i>
                <div className="menuDropdown">
                  <div className="menuDropdownbox">
                  <a href="#">Switzerland</a>
                  <a href="#">Georgia</a>
                  <a href="#">Paris</a>
                  <a href="#">Thailand</a>
                  <a href="#">Dubai</a>
                  </div>
                </div>
                </li>
                <li className="positionRelative">Family Packages <i className="arrow down"></i>
                <div className="menuDropdown">
                  <div className="menuDropdownbox">
                  <a href="#">Switzerland</a>
                  <a href="#">Georgia</a>
                  <a href="#">Paris</a>
                  <a href="#">Thailand</a>
                  <a href="#">Dubai</a>
                  </div>
                </div>
                </li>
                <li className="positionRelative">Adventure Packages <i className="arrow down"></i>
                <div className="menuDropdown">
                  <div className="menuDropdownbox">
                  <a href="#">Switzerland</a>
                  <a href="#">Georgia</a>
                  <a href="#">Paris</a>
                  <a href="#">Thailand</a>
                  <a href="#">Dubai</a>
                  </div>
                </div>
                </li>
              </ul>
              <button className="currencyLanguage dFlex gap5 positionRelative">
              <i className="arrow down"></i>
              <svg className="currencylanguageIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
              <span>|</span>
              <svg className="currencylanguageIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path></svg>
              <div className="currencyLanguageDropdwon">
                <div className="currenctLanguageDropdownBox bg-seconday-color pall15 borderradius15 primaryboxShadow">
                <div className="currencyLanguageTab">
                  <ul className="dFlex gap10 borderradiusfull bg-formary-color pall5 justifyContentBetween">
                    <li className={activeTab === 0 ? 'active seconday-font borderradiusfull w100'  : 'seconday-font borderradiusfull w100'} onClick={() => handleTabClick(0)}>Language</li>
                    <li className={activeTab === 1 ? 'active seconday-font borderradiusfull w100' : 'seconday-font borderradiusfull w100'} onClick={() => handleTabClick(1)}>Currency</li>
                  </ul>
                  {activeTab === 0 &&
                  <div className="currencyLanguageshow languageBox active">
                    <ul className="dFlex gap10 flexWrap textLeft my10">
                      <li className=" w48 pall10 active">English <span>United State</span></li>
                      <li className=" w48 pall10"> Vietnamese <span>Vietnamese</span></li>
                      <li className=" w48 pall10">Francais <span>Belgique</span></li>
                      <li className=" w48 pall10">Francais <span>Canada</span></li>
                      <li className=" w48 pall10">Francais <span>Belgique</span></li>
                      <li className=" w48 pall10">Francais <span>Canada</span></li>
                    </ul>
                  </div>
                  }
                  
                  {activeTab === 1 &&
                  <div className="currencyLanguageshow currencyBox active">
                  <ul className="dFlex gap10 flexWrap textLeft my10">
                      <li className="w48 pall10 active dFlex gap10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>EUR</span></li>
                      <li className="w48 pall10 dFlex alignItemCenter gap10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>USD</span></li>
                      <li className="w48 pall10 dFlex alignItemCenter gap10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>GBF</span></li>
                      <li className="w48 pall10 dFlex alignItemCenter gap10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>INR</span></li>
                      <li className="w48 pall10 dFlex alignItemCenter gap10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>QAR</span></li>
                    </ul>
                  </div>
                  }
                </div>
              </div>
              </div>
              </button>
            </div>
            </div>
            </div>
          </div>
        </header>
    );
};
export default Header;