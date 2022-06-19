import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";
import { useQuery } from "react-query";

const DetailProduct = ({ handleClick }) => {
  let { id } = useParams();

  let { data: products } = useQuery("productCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await Configs.API.get("/product/" + id, config);
    return response.data.data.data;
  });

  return (
    <motion.section
      className={cssModule.Page.detailProductSec}
      initial="out"
      animate="in"
      exit="out"
      variants={Assets.animationOne}
      transition={Assets.transition}
    >
      <img src={products?.image} alt="product" />
      <div className={cssModule.Page.detailProductDesc}>
        <h1>{products?.title}</h1>
        <h4>Stock : {products?.qty}</h4>
        <p>{products?.description}</p>
        <h2>Rp.{products?.price}</h2>
        <button onClick={() => handleClick(products)}>add cart</button>
        {/* <Link to="/customer/cart">
        </Link> */}
      </div>
    </motion.section>
  );
};

export default DetailProduct;
