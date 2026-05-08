const scrollToBookingForm = () => {
    const element = document.getElementById('booking-form');
    if(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export default function TextLinkSection() {
    return(
        <div className='flex px-5 lg:px-12 pt-10 justify-start flex-col lg:flex-row gap-1 lg:gap-2'>
            <span className='text-base lg:text-lg text-[#5C5248]'>Нравится атмосфера?</span>
            <a onClick={scrollToBookingForm} className='text-[#C45C3E] text-base lg:text-lg hover:underline'>перейти к форме бронирования</a>
        </div>
    );
};