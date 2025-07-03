import React, { useRef, useState } from 'react';
import { BsEye } from 'react-icons/bs';
import convertToBase64 from '../utils/convertToBase64';
import PopupModal from './PopupModel';


const UploadFileInput = ({ title = "Upload File", name = "file", onChange, label, multiple, img = "", isEditMode = false }) => {

    const [openModal, setOpenModal] = useState(false);
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState(img ? "view image" : "No File Chosen");
    const [url, setUrl] = useState('');

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        const { files } = e.target;
        if (!files || files.length === 0) {
            setFileName("No File Chosen");
            onChange?.(null);
            return;
        }

        const fileNames = [...files].map((f) => f.name).join(", ");
        setFileName(fileNames);

        const base64 = await convertToBase64(files[0]);
        setUrl(base64)
        onChange?.({
            target: {
                name,
                type: 'file',
                value: base64,
                files: files,
            },
        });

    };

    const handleFileShow = () => {
        setOpenModal(!openModal)
    }


    return (
        <div>
            <label className="block text-xs text-text-color">{label}</label>
            <div className="flex w-full mt-1 whitespace-nowrap overflow-hidden rounded-md border border-gray-300">
                <button
                    type="button"
                    onClick={handleFileClick}
                    className="text-bg-color bg-text-white px-4  py-1 text-xs font-light"
                >
                    {title}
                </button>
                <div className='flex justify-between items-center px-2 border w-full'>
                    <span className="px-4  py-2 text-xs truncate">
                        {fileName}
                    </span>
                    <input
                        type="file"
                        name={name}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple={multiple}
                        className="hidden"
                    />
                    {img && (<BsEye className='cursor-pointer hover:text-bg-color' onClick={handleFileShow} />
                    )}
                </div>


                <PopupModal isOpen={openModal} onClose={() => setOpenModal(false)} title={label}>
                    <img
                        src={url ? url : img}
                        alt=""
                    />

                </PopupModal>
            </div>
        </div>
    );
};

export default UploadFileInput;