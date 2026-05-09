export default function TextLinkSection() {
    return(
        <div className='flex px-5 lg:px-12 pt-10 justify-start flex-col lg:flex-row gap-1 lg:gap-2'>
            <span className='text-base lg:text-lg text-[#5C5248]'>Нравится атмосфера?</span>
            <a href='#booking-form' className='text-[#C45C3E] text-base lg:text-lg hover:underline focus-visible:underline focus-visible:outline-none'>перейти к форме бронирования</a>
        </div>
    );
};