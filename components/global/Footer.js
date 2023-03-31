import Container from "../atoms/Container";
import Link from "next/link";
import Image from "next/image";



const legallinks = [
    { name: 'Product & Service Policies', link: '/' },
    { name: 'Privacy Policy & Terms of Use', link: '/' },
    { name: 'Accessibility Statement', link: '/' },
]

const navLinks = [
    { name: 'About', link: '/about'},
    { name: 'FAQ', link: 'https://help.heydayskincare.com'},
    { name: 'Franchising', link: 'https://franchising.heydayskincare.com'},
    { name: 'Locations', link: '/locations'},
    { name: 'Membership', link: '/membership'},
    { name: 'Careers', link: '/careers'},
    { name: 'Gift Cards', link: '/collections/gift-cards'},
    { name: 'Contact', link: '/contact'},
]

export default function Footer() {
    return (
        <footer className="border-t border-[#333f48]">
            <Container>
                <div className="py-12 md:max-w-7xl mx-auto">
                    <div className="flex flex-wrap text-sm max-w-lg font-maison-mono">
                        {navLinks.map(navLink => (
                            <Link href={navLink.link} className='basis-3/6 py-3 hover:text-[#ca9a8e]' key={navLink.name}>{navLink.name}</Link>
                        ))}
                    </div>
                    <div className="max-w-[50%] text-lg mt-4 text-[#989ea3] md:mt-12 font-maison font-normal">
                        <p>Skincare Without Second Guessing</p>
                    </div>
                </div>
            </Container>
            <div className="bg-[#333f48] text-white py-12">
                <Container>
                    <div className="max-w-7xl flex flex-col gap-10 text-sm md:mx-auto md:flex-row md:justify-between">
                        <div>
                            <span>Heyday Wellness LLC. All rights reserved 2023.</span>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row">
                            {legallinks.map(link => (
                                <Link href={link.link} key={link.name}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}