import { signOut } from "next-auth/react"
import Container from '../atoms/Container'

export default function Profile({ customer }) {
    return (
        <div className='flex'>
            <div className='w-full bg-[#f8f4f0] md:w-1/4 md:p-16'>
                <Container>
                    <div className="py-20">
                        <h3 className="text-[2rem]">Hi, Ian</h3>
                        <nav>
                            <ul>
                                <li>Personal Info</li>
                                <li>Order History</li>
                                <li onClick={() => signOut()} className='cursor-pointer'>Sign Out</li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </div>
            <div></div>
        </div>
    )
}