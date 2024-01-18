import React from "react";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";

import ItemPurchaseRecap from "../component/ItemPurchaseRecap";

export default function PurchaseRecap() {
  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing="5" m="10">
        <ItemPurchaseRecap></ItemPurchaseRecap>
        <ItemPurchaseRecap></ItemPurchaseRecap>
        <ItemPurchaseRecap></ItemPurchaseRecap>
        <ItemPurchaseRecap></ItemPurchaseRecap>
        <ItemPurchaseRecap></ItemPurchaseRecap>
      </SimpleGrid>
    </>
  );
}
