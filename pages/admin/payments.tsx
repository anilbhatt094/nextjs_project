import React from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";
import "../../public/css/payment.css";


const payments = () => {
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
          <Header name="Payments" />
        </article>
        {/*end here header*/}
{/***********************************************Start here main section***********************************************/}
<section className="bg-color-FAFAFA">
  <div className="container">
  <div className="overviewSection dFlex">
    <h2 className="primaryheading">Overview</h2>
    <select>
      <option>Last Month</option>
      <option>3 Month</option>
      <option>2 Month</option>
      <option>6 Month</option>
      <option>1 Year</option>
    </select>
  </div>
  <div className="orderAmountReceived dFlex">
    <div className="orderAmountReceivedBox">
      <p>Online Orders</p>
      <h3>231</h3>
    </div>
    <div className="orderAmountReceivedBox">
    <p>Amount received</p>
      <h3>₹23,92,312.19</h3>
    </div>
  </div>
  <div className="transactionMonth">
    <ul>
      <li className="primaryheading positionRelative">Transaction</li>
      <li className="primaryheading positionRelative">This Month</li>
    </ul>
  </div>
  <div className="transactionTable">
    <div className="transactionTablesearchsort">
      <div className="transactionTableSearch">
        <form>
          <input type="text" placeholder="Search by Order ID..."></input>
          <img src="../img/icon/search.png"/>
        </form>
      </div>
      <div className="transactionTableSorting">
        <div className="transactionTableSortingBox">
          <p>Sort</p>
          <img src="../img/icon/sort.png"/>
        </div>
        <div className="transactionTableSortingBox">
        <img src="../img/icon/download.png"/>
        </div>
      </div>
    </div>

    <div className="transactionTableData">
  <table className="w100">
      <thead>
        <tr>
          <th className="w30 textLeft">Order ID</th>
          <th className="w30 textLeft">Order Date</th>
          <th className="w20 textRight">Order Amount</th>
          <th className="w20 textRight">Transaction Fees</th>
        </tr>
      </thead>
      <tbody>
      
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          <tr>
            <td><a href="#">#281209</a></td>
            <td>7 July, 2023</td>
            <td className="textRight">₹1,278.23</td>
            <td className="textRight">₹22</td>
          </tr>
          
      </tbody>
    </table>
    <div className="tablePagination">
      <div className="tablepaginationBtn">
        <button className="paginationBorder">Previous</button>
        <button>1</button>
        <button>...</button>
        <button className="active">10</button>
        <button>11</button>
        <button>12</button>
        <button>13</button>
        <button>14</button>
        <button>15</button>
        <button>16</button>
        <button>17</button>
        <button>18</button>
        <button className="paginationBorder">Next</button>
      </div>
    </div>
  </div>
  </div>
 
  </div>
</section>

{/***********************************************End here main section***********************************************/}



        {/*start here footer*/}
        <article>
          <Footer />
        </article>
        {/*start here footer*/}
      </section>
      
    </section>
  );
};
export default payments;
