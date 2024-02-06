import React from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";
import "../../public/css/admin/main.css";

const index = () => {
  return (
    <section className="dFlex">
      {/*start here sidebar*/}
      <aside>
        <Sidebar />
      </aside>
      {/*end here sidebar*/}
      <section className="w100">
        {/*start here header*/}
        <article>
          <Header name="Dashboard" />
        </article>
        {/*end here header*/}

        {/*Start here section*/}
        <section className="containerFluid">
          <form>
            <div className="Topbartext w100 positionRelative">
              <input className="w100 borderall pall10" type="text" placeholder="Enter Placeholder Text"/>
              <button className="bg-thrimary-color text-formary-color seconday-font">Save</button>
            </div>
          </form>
        </section>
        {/*End here section*/}


        {/*start here footer*/}
        <article>
          <Footer />
        </article>
        {/*start here footer*/}
      </section>
      
    </section>
  );
};
export default index;
