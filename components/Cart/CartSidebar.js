import { Box, Text, Button } from '@chakra-ui/react'
import CartProductPreview from './CartProductPreview'
import Link from 'next/link'
import React from 'react'

export default function CartSidebar() {
  return (
    <Box>
        <Box px='1.5rem'>
            <Box display='flex' borderBottom='1px solid #000' py='16px' alignItems='center'>
                <Text fontSize='1.25rem'>Your Bag</Text>
                <Text as='span' fontSize='.875rem' color='#989ea3' ml='1.25rem'>(1 Item)</Text>
            </Box>

            {/* Cart Items Container */}
            <Box>
                <CartProductPreview />
                <CartProductPreview />
                <CartProductPreview />
            </Box>
        </Box>
        <Box w='100%' display='flex' flexDir='column' px='1.5rem' py='1.5rem' bg='#fff' pos='fixed' bottom='0' textAlign='center' gap={4} borderTop='1px solid #000'>
            <Text>You've qualified for free shipping.</Text>
            <Button w='100%' bg='#fff' border='1px solid #000' borderRadius='0' py='16px' h='auto'>Checkout - $126.00</Button>
            <Link href='/legal/terms'>Terms & Conditions</Link>
        </Box>
    </Box>
  )
}
