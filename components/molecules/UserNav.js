// This component houses the core user components in the navbar. 
// Ideally, these components should represent the most imporant actions we want our users to take and have access to.

import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import UserIcon from '../../public/icons/UserIcon'
import SearchIcon from '../../public/icons/SearchIcon'
import CartIcon from '../../public/icons/CartIcon'

export default function UserNav({onSearchOpen}) {
    return (
        <div>
            <div className='flex gap-3 md:gap-6'>
                <SearchIcon onClick={onSearchOpen}/>
                <Link href="/account">
                    <UserIcon />
                </Link>
                <CartIcon />
            </div>
        </div>
    )
}