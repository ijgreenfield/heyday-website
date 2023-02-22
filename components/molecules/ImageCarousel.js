import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';


export default function ImageCarousel({ images }) {
    return (
        <Swiper 
            className="relative w-full h-full"
            loop="true"
        >
            {images.map(item => {
                const image = item.node
                return (
                    <SwiperSlide key={item.node.id}>
                        <Image 
                            src={image.src}
                            alt={image.altText}
                            fill
                            priority
                            
                        />
                    </SwiperSlide>
                )
            }            
            )}
        </Swiper>
    )
}