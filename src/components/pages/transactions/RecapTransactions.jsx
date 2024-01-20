import React from "react";
import { Container, SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";
import ItemPurchase from "./ItemPurchase";
import Header from "../layout/Header";
import WithAuth from "../auth/withAuth";

function RecapTransactions() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error", error));
  }, []);

  return (
    <>
    <Header/>
      <Center style={{backgroundColor: '#0081B4'}} h="100px" color="white">
        <Heading as="h1" size="2xl" noOfLines={1} m>
          Purchase Recap
        </Heading>
      </Center>

      <SimpleGrid columns={[2, null, 3]} spacing="5" m="10">
        {data &&
          data.map((transaction) => (
            <ItemPurchase
              transaction={transaction}
              key={transaction.id}
            ></ItemPurchase>
          ))}
      </SimpleGrid>
    </>
  );
}

export default WithAuth(RecapTransactions)
