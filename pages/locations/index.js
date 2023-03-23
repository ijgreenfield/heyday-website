import { builder } from "@builder.io/react"
import LocationCard from "../../components/organisms/Locations/LocationCard";
import Head from "next/head";
import ShopMap from "../../components/organisms/Locations/Map";
import Container from "../../components/atoms/Container";

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
                <div className="max-w-7xl mx-auto flex flex-col">
                    <div className="flex flex-col gap-8 w-full px-6 py-16 md:py-20 md:pr-[25%]">
                        <span className="text-xl">Our Locations</span>
                        <h1 className="text-4xl leading-[3.5rem] text-[#c6a992]">I'm looking for a Heyday near any city.</h1>
                    </div>
                    <div className="w-full h-64">
                        <ShopMap />
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-16'>
                <Container>
                    {Object.keys(results).sort().map((key, i) => (
                        <div key={key} className='flex flex-col md:gap-8 md:pb-8 mb-8 md:border-b md:border-[#333f48]'>
                            <h3 className="text-[2rem] my-2.5">{key}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {results[key].map(shop => {
                                    return (
                                        <LocationCard shop={shop}/>
                                    )
                                }).sort()}
                            </div>
                        </div>
                    ))}
                </Container>
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