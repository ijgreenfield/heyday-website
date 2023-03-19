import Image from "next/image"
import Link from "next/link"
import RatingsUI from "../../GenUI/Ratings"

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.handle}`} className='grow mb-6'>
            <div className="w-full h-48 md:h-72 relative">
                <Image src={product.images[0]?.src} fill/>
            </div>
            <div className="flex flex-col grow">
                <div className="grow">
                    <div>
                        <span className="uppercase text-[.625rem] tracking-wider">{product.vendor}</span>
                        <p className="text-xs md:text-lg font-extralight min-h-[56px]">{product.title}</p>
                    </div>
                </div>
                <div className="mb-2.5">
                    <RatingsUI />
                </div>
                <div className="">
                    <button className="py-1 md:py-2.5 border border-[#333f48] w-full text-center text-[.625rem] md:text-sm">Add to Cart - ${product.variants[0].price.amount}</button>
                </div>
            </div>
        </Link>
    )
}