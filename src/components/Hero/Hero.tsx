export default function Hero() {
    return(
        <div className='w-full px-5 lg:px-12'>
            <img className='flex lg:hidden' src='/hero.svg' alt='Hero'/>
            <div className='hidden lg:block rounded-xl overflow-hidden h-110'>
                <img className='w-full h-full object-cover object-center' src='/hero-desktop.jpg' alt='Hero'/>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-black text-2xl lg:text-3xl font-bold py-3'>Домашняя кухня в центре города</h2>
                <span className='text-[#5C5248] text-lg lg:text-xl'>Бронируйте стол онлайн — мы подготовим всё к вашему приходу.</span>
                <a href='#booking-form' className='bg-[#C45C3E] hover:bg-[#A84B31] focus:outline-none focus:ring-2 focus:ring-[#C45C3E] rounded-lg text-white text-base lg:text-lg font-medium flex items-center justify-center w-fit px-5 lg:px-8 py-3 mt-5'>Забронировать стол</a>
            </div>
        </div>
    );
};