import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import * as Configs from "../config/index";
import * as cssModule from "../style/index";
import * as Assets from "../assets/index";

const AddProfile = () => {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    gender: "",
    address: "",
    image: "",
    posCode: "",
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
      formData.set("phone", form.phone);
      formData.set("address", form.address);
      formData.set("gender", form.gender);
      formData.set("posCode", form.posCode);

      const response = await Configs.API.post("/profile", formData, config);
      console.log(response.data.data);
      navigate("/customer/profile");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <section className={cssModule.Page.adminProductSec}>
      <form onSubmit={e => handleSubmit.mutate(e)}>
        <h1>Add Profile</h1>
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          name="phone"
          onChange={handleChange}
        />
        <textarea
          rows="3"
          placeholder="Address"
          id="address"
          name="address"
          onChange={handleChange}
        ></textarea>
        <select id="gender" name="gender" onChange={handleChange}>
          <option hidden>gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          placeholder="Pos Code"
          id="posCode"
          name="posCode"
          onChange={handleChange}
        />
        <label htmlFor="upload">
          Photo Profile <img src={Assets.svgFile} alt="file" />
        </label>
        <input
          type="file"
          id="upload"
          placeholder="Image"
          name="image"
          onChange={handleChange}
        />
        <div>
          <button>Save Profile</button>
        </div>
      </form>
      {preview && (
        <div>
          <img src={preview} alt="product" />
        </div>
      )}
    </section>
  );
};

export default AddProfile;
