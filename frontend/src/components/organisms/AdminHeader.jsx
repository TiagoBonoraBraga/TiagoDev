import { useState } from "react";
import { useRouter } from "next/router";
import nookies from 'nookies';
import CustomLogo from "../atoms/CustomLogo";

export default function AdminHeader() {
    const [navbar, setNavbar] = useState(false);
    const router = useRouter();
    return (
        <nav className="w-full z-10 top-0  fixed bg-blue-300 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between  md:py-5 md:block">
                        <CustomLogo />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white-500 rounded-md outline-none focus:border-white-500 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white-500"
                                        viewBox="0 0 20 20"
                                        fill="white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white-500 hover:text-white-500 hover:text-lg">
                                <a href="/admin/contacts">Contatos</a>
                            </li>
                            <li className="text-white-500 hover:text-white-500 hover:text-lg">
                                <a href="/admin/register">Novos Registros</a>
                            </li>

                        </ul>

                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">                   
                    <button
                        className="px-4 py-2 text-blue-300 bg-white-500 rounded-md shadow hover:bg-blue-500 hover:text-white-500"
                        onClick={() => {
                            nookies.destroy(null, 'SECRET_PASSWORD');
                            router.push('/')
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}