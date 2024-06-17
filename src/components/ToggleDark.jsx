import React from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function ToggleDark({ checked, onChange }) {
    return (
        <div className="flex justify-center items-center">
            <label className="relative inline-block w-16 h-8">
                <span className={`absolute top-[6px] left-9 z-10 `}>
                    <IoSunny className="text-orange-500 text-[20px]" />
                </span>
                <span className={`absolute top-[6px] left-1 z-10 `}>
                    <FaMoon className="text-lighte3 text-[20px]" />
                </span>
                <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0 peer"
                    defaultChecked={checked}
                    onChange={onChange}
                />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-lighte3 transition-all duration-400 rounded-full peer-checked:bg-dark24 peer-focus:ring-2 peer-focus:ring-blue-900"></span>
                <span className="absolute content-[''] h-7 w-7 bg-dark24 rounded-full bottom-[2px] left-1 z-20 transition-all duration-400 peer-checked:transform peer-checked:bg-lighte3 peer-checked:translate-x-7"></span>
            </label>
        </div>
    );
}