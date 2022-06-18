import React, { useEffect, useState } from "react";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";
import * as Assets from "../assets/index";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

const EditProduct = () => {
  const [preview, setPreview] = useState(null); //For image preview
  const [product, setProduct] = useState({}); //Store product data
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    qty: "",
  });
  let { id } = useParams();
  const navigator = useNavigate();

  let { data: products, refetch } = useQuery("productCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await Configs.API.get("/product/" + id, config);
    console.log(response.data.data.data);
    setForm({
      title: response.data.data.data.title,
      description: response.data.data.data.description,
      price: response.data.data.data.price,
      qty: response.data.data.data.qty,
      image: response.data.data.data.image,
    });
    setProduct(response.data.data.data);
  });

  useEffect(() => {
    if (products) {
      setPreview(products.image);
      setForm({
        ...form,
        title: products.title,
        description: products.description,
        price: products.price,
        qty: products.qty,
      });
      setProduct(products);
    }
  }, [products]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      setPreview(e.target.files);
    }
  };

  const handleSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      // Store data with FormData as object
      const formData = new FormData();
      if (preview) {
        formData.set("image", preview[0], preview[0]?.name);
      }
      formData.set("title", form.title);
      formData.set("description", form.description);
      formData.set("price", form.price);
      formData.set("qty", form.qty);

      // Configuration
      const config = {
        method: "PATCH",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
        body: formData,
      };

      // Insert product data
      const response = await Configs.API.patch(
        "/product/" + product.id,
        config
      );
      console.log(formData);
      console.log(FormData);
      console.log(response.data);

      navigator("/admin/list-product");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <section className={cssModule.Page.adminProductSec}>
      <form onSubmit={e => handleSubmit.mutate(e)}>
        <h1>Edit Product</h1>
        <input
          type="text"
          placeholder="title"
          name="title"
          id="title"
          onChange={handleChange}
          value={form.title}
        />
        <textarea
          rows="5"
          id="description"
          placeholder="Description Product"
          name="description"
          onChange={handleChange}
          value={form.description}
        ></textarea>
        <input
          id="price"
          type="text"
          placeholder="Price"
          name="price"
          onChange={handleChange}
          value={form.price}
        />
        <input
          id="qty"
          type="text"
          placeholder="Stock"
          name="qty"
          onChange={handleChange}
          value={form.qty}
        />
        <label htmlFor="upload">
          Photo Product <img src={Assets.svgFile} alt="file" />
        </label>
        <input type="file" id="upload" placeholder="Image" />
        <div>
          <button>Edit Product</button>
        </div>
      </form>
      {!preview ? (
        <div>
          <img src={form.image} alt="product" />
        </div>
      ) : (
        <div>
          <img src={URL.createObjectURL(preview[0])} alt="product" />
        </div>
      )}
    </section>
  );
};

export default EditProduct;
