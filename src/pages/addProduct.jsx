import React from "react";
import * as cssModule from "../style/index";
import * as Assets from "../assets/index";

const AddProduct = () => {
  return (
    <section className={cssModule.Page.adminProductSec}>
      <form>
        <h1>Add Product</h1>
        <input type="text" placeholder="Name" />
        <textarea rows="5" placeholder="Description Product"></textarea>
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Stock" />
        <label htmlFor="image">
          Photo Product <img src={Assets.svgFile} alt="file" />
        </label>
        <input type="file" id="image" placeholder="Image" />
        <div>
          <button>Add Product</button>
        </div>
      </form>
      <div>
        <img src={Assets.imgProductOne} alt="product" />
      </div>
    </section>
  );
};

export default AddProduct;
