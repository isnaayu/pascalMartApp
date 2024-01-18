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
  TableCaption,
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

export default function ItemPurchaseRecap({ props }) {
  return (
    <Card boxShadow="md">
      <CardHeader backgroundColor="">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Heading size="md">Transaction</Heading>
          <Spacer />
          <Tag>NB213</Tag>
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
                        <Tr>
                          <Td>inches</Td>
                          <Td>millimetres (mm)</Td>
                          <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                          <Td>feet</Td>
                          <Td>centimetres (cm)</Td>
                          <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                          <Td>yards</Td>
                          <Td>metres (m)</Td>
                          <Td isNumeric>0.91444</Td>
                        </Tr>
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
              <Text ontSize="sm">Rp. 12.000.000</Text>
            </Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
