import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../ToggleContext';

export default function Footer() {

    const { toggled } = useToggle();


    return (
        <>
            <footer className={`w-full h-[100px] text-xl flex justify-center items-center text-syne
                    ${!toggled?'text-lighte3 bg-dark17':'text-dark17 bg-lighte3'} `}>
                <span className={`opacity-50`}>Designed by</span> &nbsp; 
                <Link to={'/'} className='hover:text-yellow-300'>Naval Rathore</Link>
            </footer>
        </>
    );
}
