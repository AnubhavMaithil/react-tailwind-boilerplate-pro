import React from 'react';

const PopupModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg cursor-pointer"
                >
                    &times;
                </button>
                {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default PopupModal;