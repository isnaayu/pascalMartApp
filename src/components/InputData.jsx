/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "./FetchData";
import WithAuth from "../HOC/WithAuth";

function InputData() {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState({ name: "", qty: "", price: 0 });
  const [data, loading, error] = useFetch("http://localhost:3001/items");

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItems({ ...newItems, [name]: value });
  };

  const datas = [];

  datas.push(items);
  console.log(datas);

  const handleAddItems = (e) => {
    e.preventDefault();

    const priceAsInteger = parseInt(newItems.price, 10);

    if (!isNaN(priceAsInteger)) {
      // Menyiapkan payload dengan price yang sudah diubah ke integer
      const newItem = {
        name: newItems.name,
        qty: newItems.qty,
        price: priceAsInteger,
      };

      setItems([...items, newItems]);

      setNewItems({ name: "", qty: "", price: 0 });

      //   fetch("http://localhost:3001/items", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       setItems([...items, data]);
      //       setNewItems({ name: "", qty: "", price: 0 });
      //     })
      //     .catch((error) => console.error("Fetch error", error));
    }
  };

  const handleBuy = () => {
    fetch("http://localhost:3001/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems([]);
        console.log("success");
      })
      .catch((error) => console.error("Fetch error", error));
  };

  const handleDeleteItems = (index) => {
    // fetch(`http://localhost:3001/items/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setItems(items.filter((item) => item.id !== id));
    //   })
    //   .catch((error) => console.error("Fetch error", error));

    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="card" style={{ width: "700px" }}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <h5 className="card-header">Pascal Mart</h5>
        <div className="card-body">
          <h5 className="card-title mb-3">Input Items</h5>

          <form onSubmit={handleAddItems} style={{ color: "black" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Item Names
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={newItems.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="qty" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                name="qty"
                className="form-control"
                value={newItems.qty}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                id="price"
                value={newItems.price}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "10px", width: "300px", fontSize: "20px" }}
            >
              Submit
            </button>
          </form>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px", width: "300px", fontSize: "20px" }}
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Item Names</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteItems(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WithAuth(InputData);
