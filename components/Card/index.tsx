import { Box, Flex, Image } from "@chakra-ui/react"
  
  import React from "react"
  
  interface CardProps {
      data:{
          Cover: string
      }
  }

  export function Card({data } : CardProps) {
    return (
      <Box
      background="0"
      position="relative"
      transition="all 500ms"
      mt="15px"
      ml={{base: "40px", md: "50px", xl:"50px"}}
      width="100%"
      >
          <Flex w={{base: "280px", sm: "290px"}}>
              <Image
              h="269px"
              w="241px"
              alt="imagem"
              src={data.Cover ? data.Cover : "/cover.png"}
              />
          </Flex>
      </Box>
    )
  }