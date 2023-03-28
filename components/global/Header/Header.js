import Image from "next/image";
import { useState } from "react";
import UserNav from '../../molecules/UserNav'
import AnnouncementBar from "../../molecules/AnnouncementBar";
import Link from "next/link";
import Container from "../../atoms/Container";
import SearchWrapper from "@/components/organisms/ProductSearch/SearchWrapper";
import HamburgerIcon from '../../../public/icons/HamburgerIcon'
import Sidebar from '../../GenUI/Sidebar'
import { Box, DrawerBody, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import MobileSidebarContent from '../../global/Header/MobileSidebarContent'

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const onSearchOpen = () => setIsSearchOpen(true)
    const onSearchClose = () => setIsSearchOpen(false)

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
            <header className="py-2 border-b border-black md:py-4">
                <Container>
                    <div className="flex items-center">
                        <div className="flex grow justify-start basis-0">
                            <div className="md:flex gap-12 text-sm hidden">
                                {Links.map(link => <p key={link.name}>{link.name}</p>)}
                            </div>
                            <HamburgerIcon className='md:hidden' onClick={() => onOpen()}/>
                            <Sidebar placement='left' onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
                                <MobileSidebarContent />
                            </Sidebar>
                            {/*<Sidebar isOpen={isOpen} onDismiss={onDismiss}/>*/}
                        </div>
                        <div className="flex grow justify-center basis-0">
                            <Link href="/" className="relative w-16 h-8">
                                <Image 
                                    src="https://cdn.shopify.com/s/files/1/1704/8471/files/hdr_logo.png?v=1613771416"
                                    fill
                                    alt="Heyday Logo"
                                />
                            </Link>
                        </div>
                        <div className="flex grow items-center justify-end basis-0 md:gap-8">
                            {/* Create button component */}
                            <button className="hidden md:block bg-[#105368] py-2 px-6 rounded-lg text-white text-sm font-normal">Book A Facial</button>
                            <UserNav onSearchOpen={onSearchOpen}/>
                        </div>
                    </div>
                </Container>
            </header>
            <SearchWrapper isSearchOpen={isSearchOpen} onSearchClose={onSearchClose}/>
        </div>
    )
}
