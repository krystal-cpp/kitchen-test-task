export default function Header() {
    return (
        <div className='w-full p-5 lg:p-12 flex flex-col lg:flex-row lg:justify-between'>
            <div className='text-lg lg:text-xl flex gap-3'>
                <img src='/logo.svg' alt='Logo' />
                <span className='font-bold text-black'>Уютная</span>
                <span className='font-bold text-[#C45C3E]'> кухня</span>
            </div>
            <div className='flex text-xs lg:text-sm gap-5'>
                <a href='#' className='text-[#5C5248] hover:underline focus-visible:underline focus-visible:outline-none'>Меню</a>
                <a href='#booking-form' className='text-[#C45C3E] hover:underline focus-visible:underline focus-visible:outline-none'>К бронированию</a>
            </div>
        </div>
    );
};