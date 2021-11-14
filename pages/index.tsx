import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "../src/sections/details";
import Cart from "../src/sections/cart";


const IndexPage = () => {
  return (
   <Container maxW="container.xl" p={0}>
    <Flex h={{base: "auto", md:"100vh"}} py={[0, 10, 20]} direction={{ base: "column-reverse", md:"row"}}>
  <Details />
  <Cart />
    </Flex>
  </Container>
  )
}

export default IndexPage;
