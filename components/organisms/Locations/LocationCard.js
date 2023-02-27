import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function LocationCard({shop}) {
    console.log(shop)
  return (
    <div className='border border-[#333f48] w-full'>
        <div className='relative w-full h-96'>
            <Image 
                src='https://cdn.shopify.com/s/files/1/1704/8471/files/Evergreen-ShopLP-Image_Know_Henderson_Old_Town_Cards5_ccexpress.jpg?v=5132933600912960038'
                alt='Alt text'
                fill
            />
        </div>
        <div className='p-6'>
            <div className='flex flex-col gap-4'>
                <div className='mb-4'>
                    <h3>{shop.name}</h3>
                    <p>{shop.data.address}</p>
                </div>
                <div>
                    <p>310-986-8661</p>
                    <p><a href="mailto: ">manhattanbeach@heydayskincare.com</a></p>
                </div>
                <div>
                    <p>Now Open!</p>
                </div>
                {/* May be worth refactoring these */}
                <div className='flex flex-col gap-3'>
                    <Link href='/' className='w-full border border-[#333f48] text-center py-2.5'>Book Now</Link>
                    <Link href='/' className='w-full border border-[#333f48] text-center py-2.5'>Learn More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
