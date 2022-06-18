import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import * as Components from "../components/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";

const ListProduct = () => {
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  let api = Configs.API;

  let { data: products, refetch } = useQuery("productsCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/product", config);
    // console.log(response.data.data);
    return response.data.data;
  });

  function addProduct(id) {
    navigate("/admin/add-product");
  }

  function editProduct(id) {
    navigate(`/admin/edit-product/${id}`);
  }

  const deleteButton = () => {
    setShowModal(prev => !prev);
  };

  const handleDelete = id => {
    setIdDelete(id);
    deleteButton();
  };

  const deleteById = useMutation(async id => {
    try {
      await api.delete(`/product/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (confirmDelete) {
      setShowModal(prev => !prev);
      deleteById.mutate(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  return (
    <>
      <Components.ModalDelete
        setConfirmDelete={setConfirmDelete}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <section className={cssModule.Page.adminProductTab}>
        <div className={cssModule.Page.adminProductAdd}>
          <h1>List Product</h1>
          <div>
            <button onClick={addProduct}>add product</button>
          </div>
        </div>
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
              {products?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={item.image} alt="Product" />
                  </td>
                  <td>Rp.{item.price}</td>
                  <td>{item.qty}</td>
                  <td>
                    <button
                      onClick={() => {
                        editProduct(item.id);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ListProduct;
