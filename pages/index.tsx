import React from "react";
import Header from "../components/frontend/Header";
import "../public/css/frontend/searchWidget.css";
import "../public/css/frontend/home.css";

const index = () => {
  return (
    
      
      <>
        {/*start here header*/}
        <article>
          <Header/>
        </article>
        {/*end here header*/}

    {/***********************************************************************************************************************/}
        {/*Start here mid section*/}
        <section className="bannerPnl py50  positionRelative">
          <div className="bgBlugColor"></div>
          <div className="container">
            <div className="bannerSection dFlex gap50 postionRelative">
              <div className="bannerContent w50">
                <h1 className="fimary-font fontweight600 text-thrimary-color">Flight, Hotel, Packages & Transfers Experinces</h1>
                <p className="formary-font text-thrimary-color my30">Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
                <a href="#" className="bg-primary-color borderradiusfull text-seconday-color pall20 thrimary-font mt10 dInlineBlock">Start your search</a>
              </div>
              <div className="bannerImg w50">
                <img src="../../../img/frontend/banner/hero-right.webp" className="w100"/>
              </div>
              <div className="searchWidget">
              <div className="searchWidgetTab">
              <ul className="dFlex gap30">
                <li className="positionRelative active">Flights</li>
                <li className="positionRelative">Hotels</li>
                <li className="positionRelative">Packages</li>
                <li className="positionRelative">Transfers</li>
              </ul>
              </div>
              <div className="searchwidgetresult mt30 bg-seconday-color secondaryboxShadow borderradius25">
                <div className="searchWidgetshow flightSearchWidget">
                  <div className="flightSearchWidgetHeader dFlex gap20 pall20 borderBottom">
                    <ul className="tripsection dFlex gap10 positionRelative">
                      <li className="py10 px30 borderradiusfull primary-font active">Round Trip</li>
                      <li className="py10 px30 borderradiusfull primary-font">One-Way</li>
                    </ul>
                    <ul className="businessClassGuest dFlex gap10 positionRelative">
                        <li className="py10 pr30 pl10 borderradiusfull primary-font positionRelative">Economy <i className="arrow down"></i></li>
                        <li className="py10 pr30 pl10 borderradiusfull primary-font positionRelative">4 Guests <i className="arrow down"></i></li>
                    </ul>
                  </div>
                  <div className="searchWidgetForm dFlex w100 alignItemCenter">
                    <div className="searchWidgetinput w100 positionRelative">
                      <input type="text" className="px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull" placeholder="Flying from"/>
                      <p className="primary-font text-default-color">Where do you want to fly from</p>
                    </div>
                    <div className="searchWidgetinput w100 positionRelative">
                      <input type="text" className="px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull" placeholder="Flying to"/>
                      <p className="primary-font text-default-color">Where you want to fly to?</p>
                    </div>
                    <div className="searchWidgetinput w100 positionRelative">
                      <input type="text" className="px20 pt20 pb40 w100 thrimary-font fontweight700 borderradiusfull" placeholder="May 01 - May 16"/>
                      <p className="primary-font text-default-color"><span>Pick up</span> - <span>Drop Off</span></p>
                    </div>
                    <div className="searchWidgetinput w20">
                      <button className="borderradius50 bg-primary-color text-seconday-color"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

           
            
          </div>

        </section>

        {/*End here mid section*/}

    {/***********************************************************************************************************************/}    

      
      </>
    );
};
export default index;
