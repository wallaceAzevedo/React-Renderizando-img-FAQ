import type { NextPage } from 'next'
import { Flex, Center, Square, Text, Box, Image, FormControl, FormLabel } from '@chakra-ui/react'

import fundo from "../public/nft.jpg"

const Home: NextPage = () => {
  return (
    <>
      <Box w="100%" h="100%">
        <Image w="100%" src={fundo.src} alt="fundo nft"></Image>
        <Flex
         maxW="900px"
         flexDir="column"
         mt={{base: "40px", md:"20px", lg:"20px"}}
         px="20px"
         margin="64px auto"
         as="main"
        >
          <Flex
          px="20px"
          maxWidth="900px"
          as="main"
          flexDirection={{base: "column", md: "row"}}
          >
            <FormControl
              display="flex"
              flexWrap="wrap"
              flex="3"
              as="form"
              maxWidth={{base:"100%", md:"435px"}}
            >
              <Center
              w="100%"
              mb="40px"
              flexDirection="column"
              > 
                <FormLabel
                  color="gray.500"
                  fontSize="18px"
                  fontWeight="bold"
                  mb="18px"
                >
                  Carregue seu arquivo
                </FormLabel>
                <Box
                bg="#FFFFFF"
                w="200px"
                h="50px"
                cursor="pointer"
                border="1.5px solid #e2e2e2"
                borderRadius="15px"
                _hover={{
                  transform: "translateY(-4px)"
                }}
                >
                  <Center>
                    <Text
                    color="gray.500"
                    fontSize="18px"
                    fontWeight="bold"
                    mt="10px"
                    >
                      Resgatar NFT
                    </Text>
                  </Center>
                </Box>
              </Center>
            </FormControl>
              <Flex
              border="1.5px solid #e2e2e2"
              borderRadius="15px"
              p="18px 26px"
              flexDirection="column"
              ml={{base: "0px", md: "53px"}}
              _hover={{
                transform: "translateY(-4px)"
              }}
              >
                <Center flex="1" mb="40px"> 
                  <Box top="25px" textAlign="center">
                    <Text
                    color="gray.500"
                    fontSize="18px"
                    fontWeight="bold"
                    mt="10px"
                    >
                      Visualização
                    </Text>
                  </Box>
                </Center>
              </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Home
