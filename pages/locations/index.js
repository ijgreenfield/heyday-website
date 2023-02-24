import { builder } from "@builder.io/react"

const BUILDER_API_KEY = 'ea37859a8c60492897e611f94cbde782'
builder.init(BUILDER_API_KEY)

export default function Locations({ location }) {
    const results = location.reduce((x, y) => {
        (x[y.data.state?.value.name] = x[y.data.state?.value.name] || []).push(y);
        
        return x;
    }, {});


  return (
    <div>
        {Object.keys(results).sort().map((key, i) => (
            <div>
                <h3>{key}</h3>
                <p>{results[key].map(shop => {
                    return (
                        <div>
                            <p>{shop.data.name}</p>
                            <p>Address: {shop.data.address} City: {shop.data.city}</p>
                        </div>
                    )
                }).sort()}</p>
            </div>
        ))}
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