import CustomLabel from "@/components/atoms/CustomLabel";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify'
import nookies from 'nookies';

export default function LoginForm() {


    const [password, setPassword] = useState('123456');
    const router = useRouter();
    console.log('router', router);
    return (
        <>
            <div className="flex flex-col items-center justity-center w-full mt-40  ">
                <div className="flex justify-center items-center w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                    <form
                        className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (password) {
                                nookies.set(null, 'SECRET_PASSWORD', password, {
                                    maxAge: 30 * 24 * 60 * 60,
                                    path: '/'
                                });
                                router.push('/admin/register')
                            } else {
                                toast.error('Wrong Password')
                            }
                        }}
                    >
                        <h1 className="w-full text-4xl font-bold text-blue-200 text-center leading-snug font-serif">
                            Tiago Dev - ADM AREA
                        </h1>
                        <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                            <div className="relative">
                                <CustomLabel
                                    title={"Password:"}
                                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute" />
                                <input
                                    className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <button
                                    className="w-full bg-blue-300 text-white-500 mt-5  p-2 rounded hover:bg-blue-500  hover:text-white-500 "
                                    type="Submit"
                                >Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}