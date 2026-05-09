import { useState } from "react";
import { SuccessModal } from "../SuccessModal/SuccessModal";

export default function BookingForm() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ phone?: string }>({});

    const validate = (form: HTMLFormElement) => {
        const formData = new FormData(form);
        const phone = String(formData.get('phone') || '').trim();

        const phoneClean = phone.replace(/[^\d+]/g, "");
        const phoneOk = /^\+?\d{10,15}$/.test(phoneClean);

        const nextErrors: { phone?: string } = {};
        if (!phoneOk) {
            nextErrors.phone = "Введите корректный номер телефона";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if(!validate(form)) return;

        setIsSubmitting(true);

        try {
            setIsPopupOpen(true);
        }
        finally {
            setIsSubmitting(false);
            e.currentTarget.reset();
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <div id='booking-form' className='w-full p-5 lg:p-12'>
                <div className='border bg-white border-[#E0D8CE] rounded-xl'>
                    <div className='flex flex-col gap-3 p-5'>
                        <div>
                            <h2 className='font-bold text-2xl text-black'>Бронирование стола</h2>
                            <span className='text-[#5C5248] text-sm'>Заполните поля — перезвоним для подтверждения.</span>
                        </div>

                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='name' className='text-xs text-black font-medium'>Имя</label>
                                <input id='name' required type='text' className='h-10 bg-[#FAF6F1] border border-[#D4CCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C45C3E]' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='surname' className='text-xs text-black font-medium'>Фамилия</label>
                                <input id='surname' required type='text' className='h-10 bg-[#FAF6F1] border border-[#D4CCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C45C3E]' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='email' className='text-xs text-black font-medium'>Email</label>
                                <input id='email' required type='email' className='h-10 bg-[#FAF6F1] border border-[#D4CCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C45C3E]' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='phone' className='text-xs text-black font-medium'>Телефон</label>
                                <input name='phone' id='phone' required type='tel' className='h-10 bg-[#FAF6F1] border border-[#D4CCC2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C45C3E]' />
                                <p className='text-xs text-[#C45C3E]'>{errors.phone}</p>
                            </div>
                            <button type='submit' disabled={isSubmitting} className='bg-[#5C6B4A] hover:bg-[#4A5640] focus:outline-none focus:ring-2 focus:ring-[#5C6B4A] text-white rounded-lg text-base font-medium flex items-center justify-center w-fit px-7 py-2 disabled:opacity-50 disabled:cursor-not-allowed'>{isSubmitting ? "Отправка..." : "Отправить"}</button>
                        </form>
                    </div>
                </div>
            </div>
            <SuccessModal isOpen={isPopupOpen} onClose={handleClosePopup} />
        </>
    );
};