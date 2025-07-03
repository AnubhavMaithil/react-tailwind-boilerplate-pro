import { MainContent } from '../../Content/MainContent'

const Footer = () => {
    return (
        <footer className="bg-[#242526] text-white p-6 flex flex-col md:flex-row justify-evenly items-center">
            <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
                <div className="flex items-center gap-2">
                    <img src={MainContent.AppLogo} alt="Bitnest Logo" className="h-16" />
                </div>
            </div>


            <div className="flex flex-col h-full items-center md:items-end md:justify-between text-center md:text-right md:py-10">
                <p className="text-xs text-gray">
                    © 2025 {MainContent.AppName}. All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer