// This component houses the core user components in the navbar. 
// Ideally, these components should represent the most imporant actions we want our users to take and have access to.

import Link from 'next/link'
import { useDisclosure } from '@chakra-ui/react'
import UserIcon from '../../public/icons/UserIcon'
import SearchIcon from '../../public/icons/SearchIcon'
import CartIcon from '../../public/icons/CartIcon'
import Sidebar from '../GenUI/Sidebar'
import CartSidebar from '../Cart/CartSidebar'

export default function UserNav({onSearchOpen}) {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <div>
            <div className='flex gap-3 md:gap-6'>
                <SearchIcon onClick={onSearchOpen}/>
                <Link href="/account">
                    <UserIcon />
                </Link>
                <CartIcon onClick={onOpen}/>
            </div>
            <Sidebar placement='right' onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
                    <CartSidebar />
                </Sidebar>
        </div>
    )
}