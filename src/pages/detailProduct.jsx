import React from "react";
import { Link, useParams } from "react-router-dom";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";
import { useQuery } from "react-query";

const DetailProduct = () => {
  let { id } = useParams();

  let { data: products } = useQuery("productCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await Configs.API.get("/product/" + id, config);
    console.log(response.data.data.data);
    return response.data.data.data;
  });
  return (
    <section className={cssModule.Page.detailProductSec}>
      <img src={products?.image} alt="product" />
      <div className={cssModule.Page.detailProductDesc}>
        <h1>{products?.title}</h1>
        <h4>Stock : {products?.qty}</h4>
        <p>{products?.description}</p>
        <h2>Rp.{products?.price}</h2>
        <Link to="/customer/cart">
          <button>add cart</button>
        </Link>
      </div>
    </section>
  );
};

export default DetailProduct;
