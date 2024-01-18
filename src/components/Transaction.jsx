import React, { useEffect, useState } from "react";
import { useFetch } from "./connection/useFetch";
import { Table } from "react-bootstrap";

function Transaction() {
  const [products] = useFetch("http://localhost:8000/barang");
  const [dataTrx] = useFetch("http://localhost:8000/transactions");
  const [newTransaction, setNewTransaction] = useState({
    id: "",
    nama_barang: "",
    quantity: 0,
    sub_total: 0
  });
  
  const [transactions, setTransaction] = useState([])

  useEffect(() => {
    if (dataTrx) {
      setTransaction(dataTrx);
    }
  }, [dataTrx]);

  const handleAddCart = async (product) => {
    const { id, nama_barang, quantity, harga } = product;
 
    const newTransactionData = {
       id,
       nama_barang,
       quantity,
       sub_total: harga * quantity
    };
 
    const response = await fetch("http://localhost:8000/transactions", {
       method: "POST",
       headers: {
          "Content-Type": "application/json",
       },
       body: JSON.stringify(newTransactionData),
    });
 
    const addNewTransaction = await response.json();
    console.log(addNewTransaction);
 
    setTransaction([...transactions, addNewTransaction]);
    setNewTransaction({
       id: "",
       nama_barang: "",
       quantity: 0,
       sub_total: 0
    });
 };
 

  return (
    <>
      <div className="container mt-2">
        <Table className="table">
          <thead className="table-dark">
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product)=> (
                <tr>
                <td>{product.id}</td>
                <td>{product.nama_barang}</td>
                <td>{product.harga}</td>
                <td>{product.quantity}</td>
                <td>
                    <button className="btn btn-success btn-sm ms-2">Update</button>
                    <button className="btn btn-primary btn-sm ms-2" onClick={() => handleAddCart(product)}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Transaction;
