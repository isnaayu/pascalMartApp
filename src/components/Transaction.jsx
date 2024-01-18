import React, { useEffect, useState } from "react";
import { useFetch } from "./connection/useFetch";
import { Table } from "react-bootstrap";

function Transaction() {
  const [trxs] = useFetch("http://localhost:8000/transactions");
  const [lastTransaction, setLastTransaction] = useState(null);

  useEffect(() => {
    if (trxs && trxs.length > 0) {
      const latestTransaction = trxs[0];
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
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
          {lastTransaction && lastTransaction.items.map((item, index) => (
                <tr key={index}>
                <td>{lastTransaction.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{lastTransaction.total_price}</td>
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Transaction;
