import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
const HomePage = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  let getProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => {
        setProducts(res);
        console.log("Products:", res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <article>
        <div>
          <div className="welcomeText">
            <h1>Welcome to SmarCart</h1>
          </div>
          <div className="favItems">
            <h3>Select Your Favorite Items</h3>
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              margin: "0 auto",
            }}
          >
            {products.map((item) => {
              return (
                <div className="productCard">
                  <li>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="productImage"
                    />
                  </li>
                  <li>
                    <div className="productTitle">{item.title}</div>
                  </li>
                  <li>
                    <div className="productPrice">₹{item.price}</div>
                  </li>
                  <li>
                    <div className="productCategory">{item.category}</div>
                  </li>
                  <li>
                    <div className="productSold">Sold by SmarCart</div>
                  </li>
                  <li>
                    <div className="productRatings">
                      <AiFillStar
                        style={{ color: "orange", marginTop: "5px" }}
                      />
                      {item.rating.rate}
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
};
export default HomePage;
