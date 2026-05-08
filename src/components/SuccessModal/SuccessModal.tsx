import { useEffect } from "react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
};

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if(e.key === 'Escape') onClose();
        };
        if(isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return() => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if(!isOpen) return null;

    return(
        <div onClick={onClose} className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5 lg:px-85 xl:px-115'>
            <div className='bg-white rounded-2xl w-full p-5 text-center flex flex-col items-center justify-center gap-5'>
                <h3 className='font-bold text-xl'>Заявка отправлена</h3>
                <span className='text-[#5C5248] text-sm'>Спасибо! Мы свяжемся с Вами в ближайшее время для подтверждения брони.</span>
                <button onClick={onClose} className='bg-[#E8DFD4] rounded-xl w-fit px-7 py-2 flex items-center justify-center font-medium text-base text-black'>Закрыть</button>
            </div>
        </div>
    );
};