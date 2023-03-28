import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Button,
    Input
  } from '@chakra-ui/react';
  import { useDisclosure } from '@chakra-ui/react';
  
  export default function Sidebar({children, placement, onOpen, isOpen, onClose}) {
    const btnRef = React.useRef()
    return (
        <Box>
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={btnRef}
                size='full'
            >
                <DrawerOverlay />
                <DrawerContent bg='#f8f4f0' px='1rem'>
                    <DrawerCloseButton />
                    <Box>
                        {children}
                    </Box>
                </DrawerContent>
            </Drawer>
        </Box>
    )
  }
  