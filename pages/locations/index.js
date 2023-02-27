import { builder } from "@builder.io/react"
import LocationCard from "../../components/organisms/Locations/LocationCard";
import Head from "next/head";
import ShopMap from "../../components/organisms/Locations/Map";

export default function Locations({ location }) {
    const results = location.reduce((x, y) => {
        (x[y.data.state?.value.name] = x[y.data.state?.value.name] || []).push(y);
        
        return x;
    }, {});


  return (
    <div>
        <Head>
            <title>Our Locations</title>
        </Head>
        <div>
            <div className="bg-[#f8f4f0]">
                <div className="max-w-7xl mx-auto flex">
                    <div className="flex flex-col gap-12 w-2/4 py-20 pr-[25%]">
                        <span>Our Locations</span>
                        <h1>I'm looking for a Heyday near any city</h1>
                    </div>
                    <div className="w-2/4">
                        <ShopMap />
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-16'>
                {Object.keys(results).sort().map((key, i) => (
                    <div key={key} className='flex flex-col gap-8 pb-8 mb-12 border-b border-[#333f48]'>
                        <h3>{key}</h3>
                        <div className="grid grid-cols-3 gap-8">
                            {results[key].map(shop => {
                                return (
                                    <LocationCard shop={shop}/>
                                )
                            }).sort()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export async function getStaticProps() {
    const location = await builder.getAll('locations')
    return {
        props: {
            location,
        }
    }
}