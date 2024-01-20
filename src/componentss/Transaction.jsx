import React, { useEffect, useState } from "react";
import { useFetch } from "./connection/useFetch";
import { Table } from "react-bootstrap";

function Transaction() {
  const [trxs] = useFetch("http://localhost:8000/transactions");
  const [lastTransaction, setLastTransaction] = useState(null);

  useEffect(() => {
    if (trxs && trxs.length > 0) {
      const sortedTransactions = trxs.sort((a, b) => {
        return parseInt(b.id) - parseInt(a.id);
      });
  
      const latestTransaction = sortedTransactions[0];
      setLastTransaction(latestTransaction);
    }
  }, [trxs]);
  
  

  return (
    <>
      <div className="container mt-2">
        <Table className="table">
          <thead className="table-dark">
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
          {lastTransaction && lastTransaction.items.map((item, index) => (
                <tr key={index}>
                <td>{lastTransaction.id}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                </tr>
            ))}
          </tbody>
        </Table>
        {lastTransaction && (
        <button className="btn btn-primary">
          Total Price: {Math.floor(lastTransaction.total_price)}
        </button>
      )}
      </div>
    </>
  );
}

export default Transaction;
