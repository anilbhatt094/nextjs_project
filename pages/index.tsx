import React from "react";
import Header from "../components/frontend/Header";
import SearchWidget from"../components/frontend/SearchWidget";
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
             <SearchWidget/>
            </div>

           
            
          </div>

        </section>

        {/*End here mid section*/}

    {/***********************************************************************************************************************/}    

      
      </>
    );
};
export default index;
