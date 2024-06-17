import React from 'react'
import { Link } from 'react-router-dom';
import { useToggle } from '../ToggleContext';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";



export default function ContactMe() {

    const { toggled } = useToggle();


    return (
        <>
            <div className={`flex items-center justify-center w-full z-50 p-[50px] py-[94px]`}>
                <div className="text-white rounded-lg p-6 w-[1000px] h-min relative">
                    <button className="absolute top-[-10px] right-[-10px] text-[30px] text-lightop40 hover:scale-[1.1] transition duration-100">
                        <Link to={"/"}>
                            <IoMdCloseCircle />
                        </Link>
                    </button>
                    <div className="flex flex-col md:flex-row gap-[20px]">
                        <div className="flex-1 flex flex-col justify-between gap-[20px]">
                            <div className="box1 bg-dark24 p-6 p-[30px] rounded-[15px] overflow-hidden relative">
                                <h2 className="text-3xl font-bold mb-2">Let's Work Together</h2>
                                <p className="text-lg">@navalrathore10</p>
                                <span className='absolute bottom-[-160%] right-[-50px]'>
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* <div className="w-64 h-64 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-lg"></div> */}
                                        </div>
                                        <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-yellow-300 to-red-600 blur-xl"></div>
                                    </div>
                                </span>
                            </div>


                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25356.49578201129!2d-122.09939606408753!3d37.40018995651625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sin!4v1718563157313!5m2!1sen!2sin"
                                width="100%" className="rounded-[15px] focus:outline-0 flex-grow"
                                allowFullScreen=""
                                loading="lazy"
                                style={{ filter: 'invert(90%)' }}></iframe>

                        </div>
                        <div className="flex-1 p-4 bg-dark24 rounded-[15px]">
                            <form className=''>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 py-2 rounded bg-transparent border border-lightop20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 rounded bg-transparent border border-lightop20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div className="mb-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-3 py-2 rounded bg-transparent border border-lightop20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="website">
                                            Website (Optional)
                                        </label>
                                        <input
                                            type="url"
                                            id="website"
                                            className="w-full px-3 py-2 rounded bg-transparent border border-lightop20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full px-3 py-2 rounded bg-transparent border border-lightop20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-[20px] mt-[20px] h-[60px]">
                        <Link to="#" className="text-white bg-dark24 rounded-[15px] flex justify-center items-center text-xl cursor-pointer">
                            <FaFacebookF />
                        </Link>
                        <Link to="#" className="text-white bg-dark24 rounded-[15px] flex justify-center items-center text-xl cursor-pointer">
                            <FaInstagram />
                        </Link>
                        <Link to="#" className="text-white bg-dark24 rounded-[15px] flex justify-center items-center text-xl cursor-pointer">
                            <FaXTwitter />
                        </Link>
                        <Link to="#" className="text-white bg-dark24 rounded-[15px] flex justify-center items-center text-xl cursor-pointer">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
