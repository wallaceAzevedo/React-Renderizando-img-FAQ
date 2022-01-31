import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    IconButton
  } from '@chakra-ui/react'

  import { ArrowRightIcon } from '@chakra-ui/icons'

  const Faq = () => {
      return (
        <>
        <Accordion allowToggle mt="30px" border="1px solid #e2e2e2" borderRadius="15px">
        <AccordionItem border="none">
          <h2>
            <AccordionButton>
            <IconButton
            variant='outline'
            colorScheme='gray'
            aria-label='Send email'
            icon={< ArrowRightIcon />}
            bg="#e2e2e2"
            color="gray"
            borderRadius="50%"
            position="absolute"
            w="50px"
            h="50px"
            ml="-30px"
          />
              <Box flex='1' textAlign='left' ml="50px" position="relative">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle mt="10px" border="1px solid #e2e2e2" borderRadius="15px">
        <AccordionItem border="none">
          <h2>
            <AccordionButton>
            <IconButton
            variant='outline'
            colorScheme='gray'
            aria-label='Send email'
            icon={< ArrowRightIcon />}
            bg="#e2e2e2"
            color="gray"
            borderRadius="50%"
            position="absolute"
            w="50px"
            h="50px"
            ml="-30px"
          />
              <Box flex='1' textAlign='left' ml="50px" position="relative">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle mt="10px" border="1px solid #e2e2e2" borderRadius="15px">
        <AccordionItem border="none">
          <h2>
            <AccordionButton>
            <IconButton
            variant='outline'
            colorScheme='gray'
            aria-label='Send email'
            icon={< ArrowRightIcon />}
            bg="#e2e2e2"
            color="gray"
            borderRadius="50%"
            position="absolute"
            w="50px"
            h="50px"
            ml="-30px"
          />
              <Box flex='1' textAlign='left' ml="50px" position="relative">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
        </>
      )
  }

  export default Faq