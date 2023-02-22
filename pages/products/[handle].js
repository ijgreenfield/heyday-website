import ImageCarousel from '../../components/molecules/ImageCarousel'
import {
  getAllProductPaths
} from '../../lib/shopify/operations'
import { getProduct } from '../../lib/shopify/index'
import Container from '../../components/atoms/Container';
import ReviewsUI from '../../components/organisms/ProductReviews';
import ReactStars from 'react-stars';
import { Disclosure, Listbox  } from '@headlessui/react';
import { useRouter } from 'next/router';


const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

export default function ProductPage({ product }) {
    const images = product.images.edges;

    const sampleIngredients = [
      { name: `${product.keyIngOneName.value}`,
        description: `${product.keyIngOneInfo.value}`
      },
      { name: 'Coconut Milk',
        description: 'Yes! You can purchase a license that you can share with your entire team.'
      },
      { name: 'Ginger',
        description: 'Yes! You can purchase a license that you can share with your entire team.'
      },
      { name: 'Full Ingredient List',
        description: 'Yes! You can purchase a license that you can share with your entire team.'
      },
    ]

    const router = useRouter()
    if (!router.isFallback && !product) {
        return <ErrorPage statusCode={404} />
    }

    return (
      <div className=''>
        <div className='h-96 w-full relative'>
          <ImageCarousel images={images}/>
        </div>
        
        <div className='py-6 pb-12'>
          <Container>
            <div className='border-[#c2c6c9] border-b pb-6'>
              <div className='mt-3.5 mb-7'>
                <span className='uppercase'>{product.vendor}</span>
              </div>
              <div className='flex flex-col gap-3 mb-4'>
                <h3>{product.title}</h3>
                <p>{product.shortDescription.value}</p>
              </div>
              <div className='flex gap-x-2'>
                <ReactStars 
                  count={5}
                  value={5}
                  size={16}
                />
                <span>2 Reviews</span>
              </div>
            </div>

            <div className='mt-4 mb-12 flex flex-col gap-4'>
              <div className='flex gap-x-2'>
                <p className=''>Good For:</p>
                <span>All Skin Types</span>
              </div>
              <div className='flex w-full '>
                <div className='border border-black border-r-0 shrink p-4'>
                {/* Refactor This to Sep. Component*/}
                <Listbox>
                  <Listbox.Button>10oz</Listbox.Button>
                  <Listbox.Options className='absolute mt-1 max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
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
                <button className='border border-black flex-1'>Add to Cart - $75</button>
              </div>
            </div>

            <div className='flex flex-col gap-y-6'>
              <div>
                <p>{product.description}</p>
              </div>
              <div>
                <span className='pb-2.5 font-bold'>The Ingredients That Make A Difference</span>
                <div>
                  {sampleIngredients.map(ing => (
                    <Disclosure key={ing.name}>
                      <div className='border-b border-[#333f48]'>
                        <Disclosure.Button className="py-4 text-lg">
                          {ing.name}
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 py-4">
                          {ing.description}
                        </Disclosure.Panel>
                      </div>
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* Treatment Room Tip */}
        <div className='bg-[#333f48] text-white py-10'>
          <Container>
            <div className='text-center flex flex-col gap-y-14'>
              <span>• FROM THE TREATMENT ROOM •</span>
              <p className='text-2xl'>{product.treatmentRoomCopy.value}</p>
            </div>
          </Container>
        </div>

        {/* Reviews */}
        <Container>
          <ReviewsUI />
          <ReviewsUI />
          <ReviewsUI />
          <ReviewsUI />
        </Container>
      </div>
    )
}

export async function getStaticProps({params}) {
    const { body } = await getProduct(params?.handle)
    const product = body.data.product;

    return {
      props: {
        product: product || null,
      },
    }
}
  
export async function getStaticPaths() {
  const paths = await getAllProductPaths()
  return {
    paths: paths.map((path) => `/products/${path}`),
    fallback: false,
  }
}
  