import React from 'react'
import { builder } from "@builder.io/react"
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import Container from '../../components/atoms/Container'
import Image from 'next/image'
import Head from 'next/head'

const questions = [
    {
        title: 'How are you different from other facial shops?',
        answer: 'We focus on customized, conversational skincare treatments. Facials are personalized each time to your skin needs and goals. Our experts are estheticians by trade, educators by trait. Our goal is twofold: to unlock your skin’s potential through our facials and to educate and empower you with skincare knowledge.'
    },
    {
        title: 'How are you different from other facial shops?',
        answer: 'We focus on customized, conversational skincare treatments. Facials are personalized each time to your skin needs and goals. Our experts are estheticians by trade, educators by trait. Our goal is twofold: to unlock your skin’s potential through our facials and to educate and empower you with skincare knowledge.'
    },
    {
        title: 'How are you different from other facial shops?',
        answer: 'We focus on customized, conversational skincare treatments. Facials are personalized each time to your skin needs and goals. Our experts are estheticians by trade, educators by trait. Our goal is twofold: to unlock your skin’s potential through our facials and to educate and empower you with skincare knowledge.'
    },
    {
        title: 'How are you different from other facial shops?',
        answer: 'We focus on customized, conversational skincare treatments. Facials are personalized each time to your skin needs and goals. Our experts are estheticians by trade, educators by trait. Our goal is twofold: to unlock your skin’s potential through our facials and to educate and empower you with skincare knowledge.'
    },
    {
        title: 'How are you different from other facial shops?',
        answer: 'We focus on customized, conversational skincare treatments. Facials are personalized each time to your skin needs and goals. Our experts are estheticians by trade, educators by trait. Our goal is twofold: to unlock your skin’s potential through our facials and to educate and empower you with skincare knowledge.'
    },
    {
        title: 'How are you different from other facial shops?',
        answer: 'We focus on customized, conversational skincare treatments. Facials are personalized each time to your skin needs and goals. Our experts are estheticians by trade, educators by trait. Our goal is twofold: to unlock your skin’s potential through our facials and to educate and empower you with skincare knowledge.'
    },
    {
        title: 'How are you different from other facial shops?',
        answer: 'We focus on customized, conversational skincare treatments. Facials are personalized each time to your skin needs and goals. Our experts are estheticians by trade, educators by trait. Our goal is twofold: to unlock your skin’s potential through our facials and to educate and empower you with skincare knowledge.'
    },
]

export default function LocationTemplate({location}) {

  const router = useRouter()
  if (!router.isFallback && !location) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
        <Head>
            <title>{location.name} | Heyday Skincare</title>
        </Head>
        <div>
        {/* What to Expect */}
        <section className='pt-[45px]'>
            <Container>
                <div className='text-center mb-8'>
                    <h2 className='text-2xl'>What to Expect</h2>
                </div>
                <div className='rounded-3xl overflow-hidden text-center text-white'>
                    <div className='relative h-[460px] w-full'>
                        <Image 
                            src='https://cdn.shopify.com/s/files/1/1704/8471/files/Group_1003_282f5d13-ca0f-44c2-8419-0762b3518122_720x.png?v=1651825933'
                            fill
                            alt='Heyday Facials Image Collage'
                        />
                    </div>
                    <div className='bg-[#b0654d] py-10 px-4'>
                        <div className='flex flex-col gap-14'>
                            <div>
                                <h4 className='text-[22px] mb-2.5'>Inviting Spaces</h4>
                                <p>A modern vibe built for convenience and conversation.</p>
                            </div>
                            <div>
                                <h4 className='text-[22px] mb-2.5'>Professional Consultations</h4>
                                <p>An expert esthetician dedicated to your skincare goals and routine.</p>
                            </div>
                            <div>
                                <h4 className='text-[22px] mb-2.5'>Personalized Services</h4>
                                <p>Professional treatments catered to your skincare goals & needs.</p>
                            </div>
                            <div>
                                <h4 className='text-[22px] mb-2.5'>Curated Recommendations</h4>
                                <p>Enhance your routine with today’s leading independent brands.</p>
                            </div>
                        </div>
                        <div className='mt-14'>
                            <button className='bg-white text-[#333f48] font-medium py-2.5 px-7 max-w-[220px] w-full border border-[#333f48] rounded-md'>Get in Early</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        {/* End What to Expect */}

        <section>
            <Container>
                <div className='klaviyo-form-UGktK4 klaviyo-form form-version-cid-3'></div>
            </Container>
        </section>

        <section className='py-16 bg-[url(https://cdn.shopify.com/s/files/1/1704/8471/files/FAQ.webp?v=1679253741)] bg-top'>
            <Container>
                <div className='mb-8 text-center'>
                    <h2 className='text-2xl'>Questions? <br />Get the Answers.</h2>
                </div>
                <div>
                {questions.map(question => (
                    <Disclosure as="div" className="border-t border-[#333f48] z-10">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-4 text-left focus:outline-none ">
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
                                <span className='block ml-2.5 font-medium'>{question.title}</span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="py-4">
                                {question.answer}
                            </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
                </div>
            </Container>
        </section>
    </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
    const location = await builder.get('locations', {
        query: {
            'data.slug': `${params.handle}`
        }
    }).toPromise()

    return {
        props: {
            location: location || null,
        }
    }
}

export async function getStaticPaths() {
    const locations = await builder.getAll('locations')
    const slugs = locations.map(location => {
        return location.data.slug
    })
    return {
        paths: slugs.map(slug => `/locations/${slug}`),
        fallback: false,
    }
}