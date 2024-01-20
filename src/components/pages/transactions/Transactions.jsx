import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../layout/Header";
import { useFetch } from "../../../connections/useFetch";
import WithAuth from "../auth/withAuth";

const Transactions = () => {
  const [trxs] = useFetch("http://localhost:8000/transactions");
  const [lastTransaction, setLastTransaction] = useState(null);
  const d = new Date();
  let day = d.toDateString() + " | " + d.toLocaleTimeString();

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
      <Header />
      <div className="container" style={{marginTop: '5%'}}>
        <div className="card mb-4 p-4">
          <h2 className="text-center LinkNav">Payment Struck Pascal Mart</h2>
          <Table style={{ width: "25%" }}>
            <tr>
              <td>Address</td>
              <td>: Ragunan Camp, Jakarta Selatan</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>: +21 84554565</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>: {day}</td>
            </tr>
          </Table>
          <hr style={{ border: "2px solid #0081B4" }} />
          <Table>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
            {lastTransaction &&
              lastTransaction.items.map((item, index) => (
                <tr key={index}>
                  <td>{lastTransaction.id}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            <tr style={{borderTop: '1px solid black'}}>
              <td colSpan={3} className="fw-bold">Total Price</td>
              <td>
                {lastTransaction && (
                  <p className="fw-bold">
                    {Math.floor(lastTransaction.total_price)}
                  </p>
                )}
              </td>
            </tr>
          </Table>
        </div>
      </div>
    </>
  );
};

export default WithAuth(Transactions);
