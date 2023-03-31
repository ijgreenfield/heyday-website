import Image from "next/image";

export default function ProductCard() {
  return (
    <div>
        <div className="relative w-full h-56">
            <Image 
                src='https://cdn.shopify.com/s/files/1/1704/8471/products/OneLoveOrganics_BotanicalDMoistureMist_PDP_710x715_d5400c3f-3b2e-4be5-9f6c-e73e672ca972_720x.jpg?v=1588185046'
                alt='Product Name'
                fill
            />
        </div>
        <div className="bg-white p-3">
            <span className="text-xs uppercase font-maison-mono">One Love Organics</span>
            <p className="text-sm">Botanical D Moisture Mist</p>
        </div>
    </div>
  )
}
