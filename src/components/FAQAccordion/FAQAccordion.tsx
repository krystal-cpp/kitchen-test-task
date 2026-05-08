import { useState } from "react";

type FAQAccordionProps = {
    title: string;
    children: React.ReactNode;
};

const FAQAccordion = ({ title, children }: FAQAccordionProps) => {
    const [ isOpen, setIsOpen ] = useState(false);

    return(
        <div className='rounded-xl overflow-hidden border border-[#E0D8CE] text-left'>
            <button type='button' 
            className={[
                'w-full py-4 px-5 flex items-center justify-between text-lg font-medium text-black', 
                'bg-white',
                isOpen ? 'border-b-0' : ''
            ].join(' ')}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}>
                <span>{title}</span>
                <span className='text-xl leading-none'>{isOpen ? '-' : '+'}</span>
            </button>

            {isOpen && (
                <div className='bg-[#F3EDE6] px-4 py-3 text-sm text-[#5C5248] leading-relaxed border border-[#E0D8CE]'>{children}</div>
            )}
        </div>
    );
};

export const FAQ = () => {
    return(
        <section className='px-5 lg:px-12 py-10'>
            <h2 className='text-2xl font-bold text-black mb-4'>Частые вопросы</h2>

            <div className=''>
                <FAQAccordion title='Часы работы'>
                    Пн–Чт 10:00–22:00 · Пт–Сб 10:00–23:00 · Вс 11:00–21:00
                </FAQAccordion>

                <FAQAccordion title='Как добраться'>
                    м. Тверская, 5 минут пешком. Вход со двора, домофон 42.
                </FAQAccordion>

                <FAQAccordion title='Детям и особые пожелания'>
                    Детское меню и стульчики. Сообщите об аллергиях в форме бронирования.
                </FAQAccordion>
            </div>
        </section>
    );
};