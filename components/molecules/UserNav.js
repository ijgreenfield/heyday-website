// This component houses the core user components in the navbar. 
// Ideally, these components should represent the most imporant actions we want our users to take and have access to.

import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function UserNav() {
   
    return (
        <div className='flex gap-3'>
            <MagnifyingGlassIcon 
                height={24}
                width={24}
                strokeWidth={1}
                color="#35383D"
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
    )
}