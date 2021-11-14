import {
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Select,
  VStack,
  Text,
  Checkbox,
  Button,
  useBreakpointValue
} from '@chakra-ui/react';

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1});
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      align="flex-start"
    >
      <VStack spacing={3} alignItems="Flex-start">
      <Heading size="2xl">Your Details</Heading>
      <Text>If you already have an account, click here to login.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="John" />
            </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Smith" />
            </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Blvd of Broken Dreams" />
            </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="San Francisco" />
            </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value="usa">United States of America</option>
                <option value="canada">Canada</option>
                <option value="philippines">Philippines</option>
                <option value="china">China</option>
              </Select>
            </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to this billing address
            </Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
            <Button colorScheme="brand" size="lg" w="full">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;