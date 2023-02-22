import Image from "next/image";
import UserNav from '../molecules/UserNav'
import { Bars2Icon } from '@heroicons/react/24/outline'
import AnnouncementBar from "../molecules/AnnouncementBar";

export default function Header() {
    return (
        <div className="">
            <AnnouncementBar />
            <header className="px-6 py-3 border-b border-black">
                <div className="flex items-center">
                    <div className="flex grow justify-start basis-0">
                        <Bars2Icon 
                            height={24}
                            width={24}
                            strokeWidth={1}
                            color="#35383D"
                        />
                    </div>
                    <div className="flex grow justify-center basis-0">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/hdr_logo.png?v=1613771416"
                            width={60}
                            height={20}
                            alt="Heyday Logo"
                        />
                    </div>
                    <div className="flex grow justify-end basis-0">
                    <UserNav />
                    </div>
                </div>
            </header>
        </div>
    )
}