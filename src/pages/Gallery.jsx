import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../ToggleContext';

export default function Gallery() {


    const { toggled } = useToggle();


    return (
        <>

            <div className={`hero p-6 min-h-screen 
                bg-[url('https://images.unsplash.com/photo-1622110356047-dae9d6b0eeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                bg-cover bg-center flex justify-center items-center 
                `}>
                <div className="text relative">
                    <h1 className={`text-3xl font-bold text-7xl text-syne ${toggled ? 'text-dark17' : 'text-white'} blur-md`}>Gallery</h1>
                    <h1 className={`text-3xl absolute top-0 left-0 font-bold text-7xl text-syne ${toggled ? 'text-lighte3' : 'text-dark17'}`}>Gallery</h1>
                </div>
            </div>

            <div className="section1 w-full p-[5%]">
                <div className="grid grid-cols-3 grid-rows-4 gap-2 md:gap-5 p-5 min-h-[600px] sm:h-[900px] mg:h-[1200px] lg:h-[1500px] max-w-[1040px] mx-auto">
                    <div className={`col-span-2 hover:shadow-lg border   group  
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/a-building-with-lights-at-night-8SuuNT0JeJw">
                        <div className ="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1662696931196-13b9c10264a0?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-center group-hover:rotate-[5deg] group-hover:border-[5px]">
                        </div></a>
                    </div>
                    <div className={`col-span-1 hover:shadow-lg border   group row-span-2 
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/a-building-with-many-windows-gRGPEBpA8eU">
                        <div className="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1662696938959-8e1dac3f1bd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-center group-hover:rotate-[5deg] group-hover:border-[5px]
                        "></div></a>
                    </div>
                    <div className={`col-span-1 hover:shadow-lg border   group 
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/lightning-striking-a-city-v7ztdGK60Js">
                        <div className ="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1661967102794-851ad9da6971?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-top group-hover:rotate-[5deg] group-hover:border-[5px]
                        "></div></a>
                    </div>
                    <div className={`col-span-1 hover:shadow-lg border   group 
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/a-black-background-with-white-lines-hwGzdxAReiI">
                        <div className ="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1661967103736-e69ba837102a?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-center group-hover:rotate-[5deg] group-hover:border-[5px]
                        "></div></a>
                    </div>
                    <div className={`col-span-1 hover:shadow-lg border   group row-span-2 
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/LkxJOQILxuc">
                        <div className="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1662696947517-681c51c08754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-center group-hover:rotate-[5deg] group-hover:border-[5px]
                        "></div></a>
                    </div>
                    <div className={`col-span-1 hover:shadow-lg border   group 
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/a-brightly-colored-structure-with-lights-in-the-middle-of-it-fNwFKNR6Fhg">
                        <div className ="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1677856124882-b67e9a704676?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-center group-hover:rotate-[5deg] group-hover:border-[5px]
                        "></div></a>
                    </div>
                    <div className={`col-span-1 hover:shadow-lg border   group 
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/a-sunset-over-power-lines-ASfKjs29mqk">
                        <div className ="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1661966789041-ce511d45c52c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-top group-hover:rotate-[5deg] group-hover:border-[5px]
                        "></div></a>
                    </div>
                    <div className={`col-span-2 hover:shadow-lg border   group 
                            ${!toggled?'bg-red-600 border-dark17':'bg-red-600 border-lighte3'}`}>
                                <a href="https://unsplash.com/photos/jal-mahal-with-lights-on-at-night-MvSNnaiK2So">
                        <div className ="img w-full h-full 
                        bg-[url('https://images.unsplash.com/photo-1662696947938-7bc8f11576b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                        bg-cover bg-center group-hover:rotate-[5deg] group-hover:border-[5px]
                        "></div></a>
                    </div>
                </div>
            </div>
        </>
    )
}
