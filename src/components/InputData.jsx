/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "./FetchData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function InputData() {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [newItems, setNewItems] = useState({ name: "", qty: "", price: 0 });
    const [transactionData] = useFetch("http://localhost:8000/transactions")
    const [newTransaction, setNewTransaction] = useState({
      id: "",
      items: [],
      total_price: 0,
    });
    const [data, loading, error] = useFetch("http://localhost:8000/items");
  
    useEffect(() => {
      get();
    }, []);
  
    const get = async () => {
      try {
        const datas = await axios.get("http://localhost:8000/items");
        console.log("hasil datas : ", datas);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      setItems(data);
    }, [data]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewItems({ ...newItems, [name]: value });
    };
  
    const handleAddItems = (e) => {
      e.preventDefault();
  
      const priceAsInteger = parseInt(newItems.price, 10);
  
      if (!isNaN(priceAsInteger)) {
        const newItem = {
          name: newItems.name,
          qty: newItems.qty,
          price: priceAsInteger,
        };
        setItems([...items, newItem]);
        setNewItems({ name: "", qty: "", price: 0 });
      }
    };
  
    const handleBuy = async () => {
      try {
        // Kirim data pembelian dan items ke server
        const response = await fetch("http://localhost:8000/transactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Date.now(),
            items: items,
            total_price: items.reduce((total, item) => total + item.price, 0),
          }),
        });
  
        if (response.ok) {
          setItems([]);
          setNewTransaction({
            id: "",
            items: [],
            total_price: 0,
          });
          console.log("Transaction success");
          navigate("/transaction"); // Redirect to the transaction page if needed
        } else {
          console.error("Transaction failed");
        }
      } catch (error) {
        console.error("Fetch error", error);
      }
    };
  
    const handleDeleteItems = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };

    useEffect(() => {
        if (transactionData) {
          const dataLength = Object.keys(transactionData).length;
          console.log("Length of transactionData:", dataLength);
        }
      }, [transactionData]);
  

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

export default InputData;
