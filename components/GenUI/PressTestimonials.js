import React from 'react'
import Image from 'next/image'
import Container from '../atoms/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const testimonials = [
    {
        name: 'New York Times',
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/New-York-Times-logo_1_86288b55-1b29-4369-ac9e-8529034c03a2_876x.png?v=1642697613',
        copy: '“Consistent quality and a reasonable price; no hard sell, clean and bright...”'
    },
    {
        name: 'New York Times',
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/New-York-Times-logo_1_86288b55-1b29-4369-ac9e-8529034c03a2_876x.png?v=1642697613',
        copy: '“Consistent quality and a reasonable price; no hard sell, clean and bright...”'
    },
    {
        name: 'New York Times',
        image: 'https://cdn.shopify.com/s/files/1/1704/8471/files/New-York-Times-logo_1_86288b55-1b29-4369-ac9e-8529034c03a2_876x.png?v=1642697613',
        copy: '“Consistent quality and a reasonable price; no hard sell, clean and bright...”'
    },
]

export default function PressTestimonials() {
  return (
    <div className='pt-14 pb-10'>
        <Container>
            <Swiper
                slidesPerView={1}
            >
                {testimonials.map(testimonial => {
                    <SwiperSlide key={testimonial.name}>
                        <div className='text-center'>
                            <div className='relative h-12 w-full mb-5'>
                                <Image 
                                    src={testimonial.image}
                                    fill
                                    alt={`${testimonial.name} Logo`}
                                />
                            </div>
                            <div>
                                <span className='font-light'>{testimonial.copy}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </Container>
    </div>
  )
}
