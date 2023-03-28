import { Box, Text, Flex } from "@chakra-ui/react"
import Image from "next/image"

export default function CartProductPreview() {
  return (
    <Box borderBottom='1px solid #c2c6c9'>
        <Flex py='1rem'>
            <Box position='relative' h='96px' w='80px'>
                <Image 
                    src='https://res.cloudinary.com/dinn28die/image/upload/v1677800827/test_yg0tje.webp'
                    alt="Image"
                    fill
                />
            </Box>
            <Box pl='1.5rem'> 
                <Box display='flex' flexDir='column' justifyContent='space-between' h='100%'>
                    <Box>
                        <Text textTransform='uppercase' fontSize='.75rem' letterSpacing='.07em'>One Love Organics</Text>
                        <Text fontWeight='medium'>Botanical B Enzyme Cleansing Oil</Text>
                    </Box>
                    <Flex w>
                        <Text flex='1'>0.5oz</Text>
                        <Text flex='1'>1</Text>
                        <Text flex='1' textAlign='right'>$14.00</Text>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}
