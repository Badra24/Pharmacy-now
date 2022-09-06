import {
    Box,
    Flex,
    HStack,
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon,
  } from "@chakra-ui/react";
  import React from "react";
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";
  import logos from '../../assets/imgs/logo2.png'
  import Image from 'next/image';


  
  export default function App(){
    return (
        <>
      <Box bg="white" _dark={{ bg: "gray.600" }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          w="full"
          justify="space-between"
          p={10}
        >
           <Flex >

    <Link href="/home">
  <HStack spacing={3} alignItems={'center'}>

    <Box pt='10px'> <Image src={logos} alt={'pharmacy'} height={"250px"} width={"250px"} /> </Box>
  
    </HStack>
    </Link>
  
</Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">about</Link>
              <Link textTransform="uppercase">help center</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">contact us</Link>
              <Link textTransform="uppercase">payment methode</Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
 
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          _dark={{ color: "#F9FAFB" }}
          h="3.5px"
        />
        <VStack py={3}>
          <HStack justify="center">
            <Link>
              <Icon
                color="gray.800"
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                color="gray.800"
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FiTwitter}
              />
            </Link>
            <Link>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
            <Link>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </HStack>
  
          <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
      </>

    );
  };