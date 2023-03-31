import SearchIcon from '@/public/icons/SearchIcon'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    InputGroup,
    InputLeftElement,
    Input,
    Text
  } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function MobileSidebarContent() {
  return (
    <Box px='1.5rem'>
        <Box h='auto' display='flex' justifyContent='center' py='16px'>
            <Box pos='relative' w='4rem' h='2rem'>
                <Image 
                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/hdr_logo.png?v=1613771416"
                    alt='Heyday Logo'
                    fill
                />
            </Box>
        </Box>
        <Box mb='20px'>
            <InputGroup>
                <InputLeftElement
                    children={<SearchIcon />}
                />
                <Input type='text' placeholder='Search' bg='white' borderRadius='0' border='none'/>
            </InputGroup>
        </Box>
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Text flex='1' textAlign='left' lineHeight='24px'>
                        Section 1 title
                        </Text>
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

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Text flex='1' textAlign='left' lineHeight='24px'>
                        Section 2 title
                        </Text>
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
        </Box>
    </Box>
  )
}
