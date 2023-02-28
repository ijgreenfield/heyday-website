import Image from "next/image";
import { useState } from "react";
import UserNav from '../../molecules/UserNav'
import { Bars2Icon } from '@heroicons/react/24/outline'
import AnnouncementBar from "../../molecules/AnnouncementBar";
import Link from "next/link";
import Container from "../../atoms/Container";
import Sidebar from '../../molecules/Sidebar'

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const onDismiss = () => setOpen(false)

    const Links = [
        { name: 'Shop', link: '/collections/all', sidebar: []},
        { name: 'Facials', link: '/services', sidebar: []},
        { name: 'Gift Cards', link: '/products/gift-card', sidebar: []},
        { name: 'Blog', link: '/blog', sidebar: []},
        { name: 'Franchise', link: 'https://franchising.heydayskincare.com', sidebar: []},
    ]

    return (
        <div className="">
            <AnnouncementBar />
            <header className="py-3 border-b border-black md:py-4">
                <Container>
                    <div className="flex items-center">
                        <div className="flex grow justify-start basis-0">
                            <div className="flex gap-12 text-sm">
                                {Links.map(link => <p onMouseEnter={() => setOpen(true)}>{link.name}</p>)}
                            </div>
                            <Bars2Icon 
                                height={24}
                                width={24}
                                strokeWidth={1}
                                color="#35383D"
                                className="md:hidden"
                            />
                            <Sidebar isOpen={isOpen} onDismiss={onDismiss}/>
                        </div>
                        <div className="flex grow justify-center basis-0">
                            <Link href="/" className="relative w-20 h-10">
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/hdr_logo.png?v=1613771416"
                                    fill
                                    alt="Heyday Logo"
                                />
                            </Link>
                        </div>
                        <div className="flex grow items-center justify-end basis-0 gap-4">
                            {/* Create button component */}
                            <button className="bg-[#105368] py-2 px-6 rounded-lg text-white text-sm font-normal">Book A Facial</button>
                            <UserNav />
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    )
}
