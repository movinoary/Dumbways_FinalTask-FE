import React, { useEffect } from "react";
import { useQuery } from "react-query";
import * as Components from "../components/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";

const HomeCustomer = () => {
  let api = Configs.API;

  let { data: products, refetch } = useQuery("productsCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/product", config);
    console.log(response.data.data);
    return response.data.data;
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <section className={cssModule.Page.homeSec}>
        <Components.Header />
        <div className={cssModule.Page.homeSecProduct}>
          {products?.map((item, index) => (
            <Components.CardProduct
              key={item.id}
              path={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              stock={item.qty}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeCustomer;
