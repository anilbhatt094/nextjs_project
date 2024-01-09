import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const dashboard = () => {
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
          <Header />
        </article>
        {/*end here header*/}

        {/*start here footer*/}
        <article>
          <Footer />
        </article>
        {/*start here footer*/}
      </section>
      
    </section>
  );
};
export default dashboard;
