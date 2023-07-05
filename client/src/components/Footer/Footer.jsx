import { NavLink} from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-4 mb-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-1">
                        <h2 className="text-lg font-bold mb-2">Company ABC</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus faucibus elit, a bibendum magna aliquet non.</p>
                    </div>
                </div>
                <hr className="border-gray-700 my-1"/>
                    <div className="text-center">
                        <p className="text-sm">&copy; 2023 Company ABC. All rights reserved.</p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer