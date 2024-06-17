import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleDark from './ToggleDark';
import { AiOutlineBars } from 'react-icons/ai';

export default function Header({ toggled, onToggle, children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!menuOpen);
        console.log('MenuOpen');
    };

    return (
        <>
            <div className={`z-20 w-full flex px-5 fixed backdrop-blur-md 
                            ${!toggled ? '' : ''}`}>
                <div className={`h-[80px] text-white flex justify-between items-center text-syne w-full ${!toggled ? 'border-dark24' : 'border-white'}`}>
                    <div className="head-left flex items-center justify-around sm:justify-start flex-grow sm:flex-1">
                        <div className={`darkmodetoggletab md:p-6 md:h-full h-min rounded-[0px_0px_35px_35px] ${!toggled ? 'md:bg-dark24' : 'md:bg-white'}`}>
                            <ToggleDark checked={toggled} onChange={onToggle} />
                        </div>
                        <div className="titlebox p-6 flex items-center sm:me-7">
                            <h2 className={`text-4xl sm:text-6xl font-bold ${!toggled ? 'text-white' : 'text-dark17'}`}>PICLOAD</h2>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------------------    Nav Horizontal */}

                    <nav className={`hidden lg:flex h-full z-20 flex 
                                    ${!toggled ? 'text-white' : 'text-dark17'}
                                    flex-col p-6 justify-center items-center `}
                        >
                        <ul className="flex gap-4 w-full h-full justify-evenly items-center">
                            <li>
                                <Link to="/" className={`block ${!toggled ? 'hover:text-yellow3' : 'hover:text-blue3'}
                                 transition duration-500 flex items-center gap-2`}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className={`block ${!toggled ? 'hover:text-yellow3' : 'hover:text-blue3'}
                                 rounded-md transition duration-500 flex items-center gap-2`}>
                                    GALLERY
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactme" className={`block ${!toggled ? 'hover:text-yellow3' : 'hover:text-blue3'}
                                 rounded-md transition duration-500 flex items-center gap-2`}>
                                    CONTACT ME
                                </Link>
                            </li>
                        </ul>
                    </nav>




                    {/* ---------------------------------------------------------------------    Nav VErtical Open MEnu */}



                    <nav className={`fixed top-[80px] left-0 w-full h-screen border backdrop-blur-md z-20 flex
                                    ${!menuOpen ? 'hidden' : 'flex text-4xl'} 
                                    ${!toggled ? 'border-dark24 bg-darkop80 text-white' : 'border-white bg-lightop80 text-dark17'}
                                    flex-col p-6 justify-center items-center `}
                        style={{ backdropFilter: 'blur(10px)' }}>
                        <ul className="flex flex-col gap-4 w-full h-full justify-evenly items-center">
                            <li>
                                <Link to="/" onClick={openMenu} className={`block ${!toggled ? 'hover:text-yellow3' : 'hover:text-blue3'}
                                 transition duration-500 flex items-center gap-2`}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" onClick={openMenu} className={`block ${!toggled ? 'hover:text-yellow3' : 'hover:text-blue3'}
                                 rounded-md transition duration-500 flex items-center gap-2`}>
                                    GALLERY
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactme" onClick={openMenu} className={`block ${!toggled ? 'hover:text-yellow3' : 'hover:text-blue3'}
                                 rounded-md transition duration-500 flex items-center gap-2`}>
                                    CONTACT ME
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="text-4xl flex items-center gap-5">
                        <div onClick={openMenu} className={`flex lg:hidden menubar cursor-pointer ${!toggled ? 'text-lighte3' : 'text-dark17'}`}>
                            <AiOutlineBars />
                        </div>

                        <div className={`hidden sm:flex overflow-hidden headerbtn w-[50px] h-[50px] rounded-full ${!toggled ? 'bg-lighte3' : 'bg-dark17'}`}>
                            <img src="https://images.unsplash.com/profile-1661966219494-f87fcbcf7937image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                                alt="" className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerspace w-full h-[80px] z-10"></div>
            {children}
        </>
    );
}
