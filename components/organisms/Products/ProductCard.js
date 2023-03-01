import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.handle}`} className='grow'>
            <div className="w-full h-72 relative">
                <Image src={product.images[0]?.src} fill/>
            </div>
            <div className="flex flex-col grow">
                <div className="grow">
                    <div>
                        <span className="uppercase text-xs tracking-wider">{product.vendor}</span>
                        <p className="text-lg font-extralight">{product.title}</p>
                    </div>
                    <div>
                        {/* Reviews */}
                    </div>
                </div>
                <div className="">
                    <button className="py-2.5 border border-[#333f48] w-full text-center text-sm">Add to Cart - ${product.variants[0].price.amount}</button>
                </div>
            </div>
        </Link>
    )
}