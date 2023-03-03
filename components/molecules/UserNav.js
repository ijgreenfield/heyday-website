// This component houses the core user components in the navbar. 
// Ideally, these components should represent the most imporant actions we want our users to take and have access to.

import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import SearchWrapper from '../organisms/ProductSearch/SearchWrapper'

export default function UserNav({onSearchOpen}) {
   
    return (
        <div>
            <div className='flex gap-3 md:gap-6'>
                <MagnifyingGlassIcon 
                    height={24}
                    width={24}
                    strokeWidth={1}
                    color="#35383D"
                    onClick={onSearchOpen}
                    cursor='pointer'
                />
                <UserIcon 
                    height={24}
                    width={24}
                    strokeWidth={1}
                    color="#35383D"
                />
                <ShoppingBagIcon 
                    height={24}
                    width={24}
                    strokeWidth={1}
                    color="#35383D"
                />
            </div>
        </div>
    )
}