import Container from "../atoms/Container";
import Link from "next/link";
import Image from "next/image";



const legallinks = [
    { name: 'Product & Service Policies', link: '/' },
    { name: 'Privacy Policy & Terms of Use', link: '/' },
    { name: 'Accessibility Statement', link: '/' },
]

const navLinks = [
    { name: 'About', link: '/'},
    { name: 'FAQ', link: '/'},
    { name: 'Franchising', link: '/'},
    { name: 'Locations', link: '/'},
    { name: 'Membership', link: '/'},
    { name: 'Careers', link: '/'},
    { name: 'Gift Cards', link: '/'},
    { name: 'Contact', link: '/'},
]

export default function Footer() {
    return (
        <footer className="border-t border-[#333f48]">
            <Container>
                <div className="py-12">
                    <div className="flex flex-wrap">
                        {navLinks.map(navLink => (
                            <Link href={navLink.link} className='basis-3/6 py-3' key={navLink.name}>{navLink.name}</Link>
                        ))}
                    </div>
                    <div className="max-w-[50%] text-lg mt-4 text-[#989ea3]">
                        <p>Skincare Without Second Guessing</p>
                    </div>
                    <div className="mt-12">
                        <Link href="/" className="flex mb-3">#heydayhabit</Link>
                        <Link href="/" className="flex relative w-full h-[330px]">
                            <Image 
                                src="https://cdn.shopify.com/s/files/1/1704/8471/files/01-04_1080x.jpg?v=1614291015"
                                fill
                            />
                        </Link>
                        <p className="mt-3">Instagram</p>
                    </div>
                </div>
            </Container>
            <div className="bg-[#333f48] text-white py-12">
                <Container>
                    <div className="flex flex-col gap-10">
                        <div>
                            <span>Heyday Wellness LLC. All rights reserved 2023.</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {legallinks.map(link => (
                                <Link href={link.link}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}