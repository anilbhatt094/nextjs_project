import React from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";

const orders = () => {
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
          <Header name="Orders" />
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
export default orders;