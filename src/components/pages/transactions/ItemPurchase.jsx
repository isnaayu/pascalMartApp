import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  Tag,
  Spacer,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function ItemPurchase({ transaction }) {
  return (
    <Card boxShadow="md">
      <CardHeader backgroundColor="">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Heading size="md">Transaction</Heading>
          <Spacer />
          <Tag>{transaction.id}</Tag>
        </Flex>
      </CardHeader>

      <CardBody size="lg">
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Items
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table variant="striped" colorScheme="teal">
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Quantity</Th>
                          <Th isNumeric>Subtotal</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {transaction.items &&
                          transaction.items.map((item) => (
                            <Tr>
                              <Td>{item.name}</Td>
                              <Td>{item.qty}</Td>
                              <Td isNumeric>Rp. {item.price}</Td>
                            </Tr>
                          ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Heading size="xs" textTransform="uppercase">
                Total
              </Heading>
              <Spacer />
              <Text>
                Rp. <strong>{transaction.total_price}</strong>
              </Text>
            </Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
