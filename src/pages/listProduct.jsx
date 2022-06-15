import React from "react";
import * as cssModule from "../style/index";
import * as Assets from "../assets/index";

const ListProduct = () => {
  return (
    <section className={cssModule.Page.adminProductTab}>
      <h1>List Product</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description Product</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>GUETEMALA Beans</td>
              <td>
                Hampir semua referensi sepakat mengatakan bahwa kopi pertama
                kali ditemukan di Ethiopia, meskipun ada juga beberapa protes
                yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama
                kali di bagian selatan Sudan. Karena para gembala Ethiopia
                adalah manusia pertama yang mengonsumsi kopi—walau saat itu
                mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan
                tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.
              </td>
              <td>
                <img src={Assets.imgProductOne} alt="Product" />
              </td>
              <td>Rp.123.000</td>
              <td>200</td>
              <td>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListProduct;
