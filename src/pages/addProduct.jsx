import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as cssModule from "../style/index";
import * as Assets from "../assets/index";
import * as Configs from "../config/index";

const AddProduct = () => {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    qty: "",
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("title", form.title);
      formData.set("description", form.description);
      formData.set("price", form.price);
      formData.set("qty", form.qty);

      const response = await Configs.API.post("/product", formData, config);
      console.log(response.data.data);
      navigate("/admin/list-product");
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <section className={cssModule.Page.adminProductSec}>
      <form onSubmit={e => handleSubmit.mutate(e)}>
        <h1>Add Product</h1>
        <input
          type="text"
          placeholder="Name"
          name="title"
          onChange={handleChange}
        />
        <textarea
          rows="5"
          placeholder="Description Product"
          name="description"
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Stock"
          name="qty"
          onChange={handleChange}
        />
        <label htmlFor="upload">
          Photo Product <img src={Assets.svgFile} alt="file" />
        </label>
        <input type="file" name="image" id="upload" onChange={handleChange} />
        <div>
          <button>Add Product</button>
        </div>
      </form>
      {preview && (
        <div>
          <img src={preview} alt={preview} />
        </div>
      )}
    </section>
  );
};

export default AddProduct;
