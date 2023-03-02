import ProductCard from "../../components/organisms/Products/ProductCard";
import { getAllCollectionPaths, getCollection } from "../../lib/shopify/operations";

export default function Handle({collection}) {
    return (
        <div className="max-w-7xl mx-auto md:py-8">
            <div>
                <h2>{collection.title}</h2>
                <p>{collection.description}</p>
            </div>
            <div className="grid grid-cols-4 gap-12 mt-12">
                {collection.products.map(product => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps({params}) {
    const collection = await getCollection(params?.handle)

    return {
      props: {
        collection: collection || null,
      },
    }
}
  
export async function getStaticPaths() {
  const paths = await getAllCollectionPaths()
  return {
    paths: paths.map((path) => `/collections/${path}`),
    fallback: "blocking",
  }
}
  