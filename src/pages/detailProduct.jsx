import React from "react";
import { Link } from "react-router-dom";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";

const DetailProduct = () => {
  return (
    <section className={cssModule.Page.detailProductSec}>
      <img src={Assets.imgProductOne} alt="product" />
      <div className={cssModule.Page.detailProductDesc}>
        <h1>RWANDA Beans</h1>
        <h4>Stock : 200</h4>
        <p>
          Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali
          ditemukan di Ethiopia, meskipun ada juga beberapa protes yang
          menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di
          bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia
          pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi
          buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat
          asal kopi” pun semakin kuat.
        </p>
        <h2>Rp.123.000</h2>
        <Link to="/customer/cart">
          <button>add cart</button>
        </Link>
      </div>
    </section>
  );
};

export default DetailProduct;
