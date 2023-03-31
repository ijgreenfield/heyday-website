import ImageCarousel from '../../components/molecules/ImageCarousel'
import { getAllProductPaths} from '../../lib/shopify/operations'
import { getProduct } from '../../lib/shopify/index'
import Container from '../../components/atoms/Container';
import { Disclosure, Listbox  } from '@headlessui/react';
import { useRouter } from 'next/router';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import Head from 'next/head';
import { getProductReviews } from '../../lib/yotpo/operations';
import RatingsUI from '../../components/GenUI/Ratings';
import TreatmentTip from '../../components/Product/ProductDetails/TreatmentTip';
import ProductReviews from '../../components/Product/ProductDetails/ProductReviews';
import HowWeUse from '../../components/Product/ProductDetails/HowWeUse';


const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

export default function ProductPage({ product, reviews }) {
    const images = product.images.edges;

    const sampleIngredients = [
      { name: `${product.keyIngOneName?.value}`,
        description: `${product.keyIngOneInfo?.value}`
      },
      { name: `${product.keyIngTwoName?.value}`,
        description: `${product.keyIngTwoInfo?.value}`
      },
      { name: `${product.keyIngThreeName?.value}`,
        description: `${product.keyIngThreeInfo?.value}`
      },
      { name: 'Full Ingredient List',
        description: `${product.fullIngList?.value}`
      },
    ]

    console.log(reviews)

    const router = useRouter()
    if (!router.isFallback && !product) {
        return <ErrorPage statusCode={404} />
    }

    return (
      <>
      <Head>
        <title>{product.seo?.title}</title>
        <meta name="description" content={product.seo?.description}></meta>
      </Head>
      <div className='font-maison'>
        <div className='h-96 w-full relative'>
          <ImageCarousel images={images}/>
        </div>
        
        <div className='py-6 pb-12'>
          <Container>
            <div className='border-[#c2c6c9] border-b pb-6'>
              <div className='mb-5'>
                <span className='uppercase font-maison-mono text-sm'>{product.vendor}</span>
              </div>
              <div className='flex flex-col gap-3 mb-4'>
                <h3 className='text-[2rem]'>{product.title}</h3>
                <p className='text-lg'>{product.shortDescription?.value}</p>
              </div>
              <div className='flex gap-x-2'>
                <RatingsUI />
              </div>
            </div>

            <div className='mt-4 mb-12 flex flex-col gap-4'>
              <div className='flex gap-x-2 text-sm'>
                <p className='font-bold'>Good For:</p>
                <span>{product.skinType?.value}</span>
              </div>
              <div className='flex w-full '>
                <div className='border border-black border-r-0 shrink'>
                {/* Refactor This to Sep. Component*/}
                <Listbox>
                  <Listbox.Button className='p-4'>10oz</Listbox.Button>
                  <Listbox.Options className='absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                      >
                        {person.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
                </div>
                <button className='border border-black flex-1 font-maison-mono'>Add to Cart - $75</button>
              </div>
            </div>

            <div className='flex flex-col gap-y-6'>
              <div>
                <p className='leading-6'>{product?.description}</p>
              </div>
              <div>
                <span className='text-sm pb-2.5 font-bold'>The Ingredients That Make A Difference</span>
                <div>
                  {sampleIngredients.map(ing => (
                    <Disclosure key={ing?.name}>
                      {({ open }) => (
                      <div className='border-b border-[#333f48]'>
                        <Disclosure.Button className="py-4 text-lg flex justify-between w-full items-center">
                          <span>{ing?.name}</span>
                          {open ? 
                                    <MinusIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5`} /> : 
                                    <PlusIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5`} />
                                }
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-sm text-[#333f48] py-4">
                          {ing?.description}
                        </Disclosure.Panel>
                      </div>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* How We Use It */}
        <HowWeUse product={product} />

        {/* Treatment Room Tip */}
        <TreatmentTip product={product}/>

        {/* Reviews */}
        <ProductReviews reviews={reviews}/>
      </div>
      </>
    )
}

export async function getStaticProps({params}) {
    const { body } = await getProduct(params?.handle)
    const product = body.data.product;
    const splitId = product.id.split('Product/')
    const { response }= await getProductReviews(splitId[1])
    const reviews = response;

    return {
      props: {
        product: product || null,
        reviews: reviews || null
      },
    }
}
  
export async function getStaticPaths() {
  const paths = await getAllProductPaths()
  return {
    paths: paths.map((path) => `/products/${path}`),
    fallback: "blocking",
  }
}
  