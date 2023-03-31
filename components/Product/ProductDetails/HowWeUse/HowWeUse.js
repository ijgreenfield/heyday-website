import Container from "../../../atoms/Container"
import Image from "next/image"
import ProductCard from "./ProductCard"

export default function HowWeUse({ product }) {
  return (
    <div className='bg-[#f8f4f0] py-10'>
        <Container>
          <div className="relative w-full h-[24rem] mb-10">
            <Image 
              src='https://cdn.shopify.com/s/files/1/1704/8471/files/HowTo_Sunscreen01_cb2e39d4-fa2d-470e-9ec7-56782ec303d2_588x.gif?v=1613750351'
              alt="Gif of woman applying face cream"
              fill
            />
          </div>
          <div className='border-b border-[#c2c6c9]'>
              <div>
                <span className="text-lg tracking-[.04em]">How We Use It</span>
              </div>
              <div className='flex flex-col gap-3 py-8'>
                <h3 className="text-[2rem]">Morning And Night</h3>
                <p className="text-lg">Apply a few drops to clean, toned skin, focusing on areas that you feel need a bit of extra attention.</p>
              </div>
          </div>
          <div className="pt-6">
            <div>
              <p className="font-bold">Complete Your Routine</p>
            </div>
            <div className="flex mt-4">
              <div className="w-7/12 mr-5">
                <span className="block uppercase text-sm font-maison-mono mb-2">Before</span>
                <ProductCard />
              </div>
              <div className="w-7/12">
                <span className="block uppercase text-sm font-maison-mono mb-2">After</span>
                <ProductCard />
              </div>
            </div>
          </div>
          </Container>
    </div>
  )
}
