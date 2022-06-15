import React from "react";
import * as cssModule from "../style/index";
import * as Assets from "../assets/index";

const EditProduct = () => {
  return (
    <section className={cssModule.Page.adminProductSec}>
      <form>
        <h1>Edit Product</h1>
        <input type="text" placeholder="Name" />
        <textarea rows="5" placeholder="Description Product"></textarea>
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Stock" />
        <label for="image">
          Photo Product <img src={Assets.svgFile} alt="file" />
        </label>
        <input type="file" id="image" placeholder="Image" />
        <div>
          <button>Edit Product</button>
        </div>
      </form>
      <div>
        <img src={Assets.imgProductOne} alt="product" />
      </div>
    </section>
  );
};

export default EditProduct;