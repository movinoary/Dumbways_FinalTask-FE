import React from "react";
import * as cssModule from "../style/index";

const TransactionAdmin = () => {
  return (
    <section className={cssModule.Page.adminTab}>
      <h1>Income Transaction</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Product Order</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>vino</td>
              <td>jl.palem</td>
              <td>13890</td>
              <td>ETHIOPIA Beans</td>
              <td>Succes</td>
              <td>V</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionAdmin;
