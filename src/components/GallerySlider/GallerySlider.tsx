import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const GallerySlider = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg', '/img9.jpg'];

    return (
        <div className='w-full p-5 lg:py-12 lg:px-27'>
            <div className='relative lg:hidden'>
                <Swiper
                    className='gallery-swiper rounded-xl pb-10'
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation={{ prevEl: '.gallery-prev', nextEl: '.gallery-next' }}>
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='h-64 overflow-hidden rounded-xl'>
                                <img src={src} className='w-full h-full object-cover' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button ref={prevRef} className='gallery-prev absolute border border-[#E0D8CE] left-4 top-[45%] -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10'>
                    <svg className='w-5 h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <button ref={nextRef} className='gallery-next absolute border border-[#E0D8CE] right-4 top-[45%] -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10'>
                    <svg className='w-5 h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>

            <div className='hidden lg:block relative'>
                <Swiper
                    className='gallery-swiper rounded-xl pb-10'
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    navigation={{ prevEl: '.gallery-prev', nextEl: '.gallery-next' }}>
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='h-64 overflow-hidden rounded-xl'>
                                <img src={src} className='w-full h-full object-cover' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button ref={prevRef} className='gallery-prev absolute -left-15 border border-[#E0D8CE] top-[45%] -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10'>
                    <svg className='w-5 h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <button ref={nextRef} className='gallery-next absolute border border-[#E0D8CE] -right-15 top-[45%] -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10'>
                    <svg className='w-5 h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </div>
    );
};