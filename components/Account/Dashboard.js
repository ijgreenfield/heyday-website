import { signOut } from "next-auth/react"

export default function Profile({customer}) {
    return (
        <div className='flex'>
            <div className='bg-[#f8f4f0] w-1/4 p-16'>
                <div>
                    <h3>{customer.firstName}</h3>
                    <nav>
                        <ul>
                            <li>Personal Info</li>
                            <li>Order History</li>
                            <li onClick={() => signOut()} className='cursor-pointer'>Sign Out</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div></div>
        </div>
    )
}