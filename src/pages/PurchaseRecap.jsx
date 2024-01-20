import React from "react";
import { Container, SimpleGrid, Box, Heading, Center } from "@chakra-ui/react";

import ItemPurchaseRecap from "../component/ItemPurchaseRecap";

export default function PurchaseRecap() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error", error));
  }, []);

  return (
    <>
      <Center bg="tomato" h="100px" color="white">
        <Heading as="h1" size="2xl" noOfLines={1} m>
          Purchase Recap
        </Heading>
      </Center>

      <SimpleGrid columns={[2, null, 3]} spacing="5" m="10">
        {data &&
          data.map((transaction) => (
            <ItemPurchaseRecap
              transaction={transaction}
              key={transaction.id}
            ></ItemPurchaseRecap>
          ))}
      </SimpleGrid>
    </>
  );
}
