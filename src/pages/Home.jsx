import React, { useState, useEffect, useRef } from 'react';
import { useToggle } from '../ToggleContext';
import { Link } from 'react-router-dom';
import { MdArrowOutward, MdArrowDownward } from "react-icons/md";
import { PiGooglePhotosLogoDuotone } from "react-icons/pi";
import SliderImg from '../components/SliderImg';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [rotate, setRotate] = useState(false);
  const listItemRefs = useRef([]);
  const { toggled } = useToggle();
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1, // Trigger the callback when 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideInFade');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    listItemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      listItemRefs.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  const rotatebtn = () => {
    setRotate(!rotate);
    setTimeout(() => {
      navigate('/gallery');
    }, 1000); // Adjust the delay to match the duration of your rotation animation
  };

  return (
    <div className="text-white min-h-screen h-min">
      {/* -----------------------------------------------    --------------------- Hero Section Starts Here  */}
      <div className="grid grid-cols-5 p-6 gap-4 mt-5 h-min">
        {/* Image card */}
        <div className="ImageCard relative col-span-5 lg:col-span-2 h-[600px] group">
          <div className="absolute z-[10] w-full bg-red-500 h-[600px] rounded-3xl flex flex-col justify-end overflow-hidden group bg-[url('https://images.unsplash.com/photo-1637662327422-7c462d38ca2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center cursor-pointer">
            <div className="abt_text h-[100px] bg-darkop40 p-4 text-white group-hover:h-[150px] transition-all duration-500 text-syne">
              <h2 className="text-2xl font-bold mb-2">SILHOUETTE PORTRAITS</h2>
              <p>
                Discover Stunning Silhouettes by{' '}
                <Link to={'/'}>@navalrathore10</Link>
              </p>
            </div>
          </div>
          <div className={`backCard absolute top-0 z-[5] w-full h-full ${!toggled ? 'bg-dark24' : 'bg-white'} 
                      shadow-xl
                      transition duration-400 rounded-3xl group-hover:rotate-[5deg]`}></div>
        </div>

        {/* ---------------------------------------------------------- Hero  right section */}
        <div className=" col-span-5 lg:col-span-3 relative mt-5 lg:mt-0 p-4 h-[600px] min-h-screen sm:min-h-[600px]">
          <div className={`blurredball opacity-40 sm:opacity-70 md:opacity-100 lg:hidden absolute top-100px left-100px w-[300px] h-[300px]
         blur-3xl rounded-full transition duration-800
         ${!toggled ? 'bg-gradient-to-r from-slate-300 to-slate-500' : 'bg-gradient-to-r from-violet-300 to-pink-300'}
         `}>

          </div>

          {/* ----------------------------------------------------------  HEro Top right Starts  */}

          <div className="topright text-syne p-4 flex flex-col justify-center gap-5 items-center
                          absolute right-0 top-0 rounded-3xl w-full md:w-[500px] h-[200px]">
            <p className={`w-full text-2xl md:text-3xl ${!toggled ? 'text-white' : 'text-dark17'}`}>
              Elevate your Designs with our handpicked featured selection.
            </p>
            <div className="blob-bar w-full flex justify-between items-center">
              <div className="leftblobs flex">
                <div
                  className={`w-[100px] h-[100px] rounded-full ${!toggled ? 'border-white' : 'border-dark17'} bg-[url('https://images.unsplash.com/photo-1662696938959-8e1dac3f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTZ8fHxlbnwwfHx8fHw%3D%3D')] bg-cover bg-center`}
                ></div>
                <div
                  className={`w-[100px] h-[100px] rounded-full border  flex justify-center items-center text-4xl
                    ${!toggled ? 'border-white text-white' : 'border-dark17 text-dark17'}
                    `}
                >
                  <PiGooglePhotosLogoDuotone className='animate-spin-slow' />
                </div>
                <div
                  className={`w-[100px] h-[100px] rounded-full ${!toggled ? 'border-white' : 'border-dark17'} bg-[url('https://images.unsplash.com/photo-1661967102794-851ad9da6971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fHw%3D%3D')] bg-cover bg-center`}
                ></div>
              </div>
              <button
                className={`rightblobs rounded-full transition duration-1000  ${!rotate ? 'rotate-[360deg]' : ''}`}
                onClick={rotatebtn}
              >
                <div
                  className={`explorebtn text-3xl flex items-center justify-center w-[50px] h-[50px] border rounded-full
                  ${!toggled ? 'border-white text-white' : 'text-dark17 border-dark17'
                    }`}
                >
                  <MdArrowOutward />
                </div>
              </button>
            </div>
          </div>

          {/* ----------------------------------------------------------  HEro bottom left Starts  */}

          <div className={`absolute bottom-left text-5xl bottom-[50px] left-0 w-full p-5 ${!toggled ? 'text-white' : 'text-dark17'}`}>
            <p className='relative w-full h-full text-syne '>
              <span className={`${!toggled ? 'text-lightop20' : 'text-darkop40'}`}>
                Introduce your brand to the art of
              </span> captivating photography. <br /> Begin your journey here!
              <button className={`ctabtn absolute  right-[20px] bottom-[100px] sm:bottom-[20px] w-[80px] h-[80px] border rounded-full
                      ${!toggled ? 'bg-lighte3' : 'bg-dark17'} border-0`}>
                <Link
                  to={'/gallery'}
                  className={`explorebtn text-5xl flex items-center justify-center w-[80px] h-[80px] border rounded-full 
                  ${!toggled ? ' text-dark17' : 'text-lighte3'}
                  hover:rotate-[22deg] `}
                >
                  <MdArrowOutward />
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------    --------------------- Section 1 Starts Here */}

      <div className={`grid grid-cols-5 gap-4 p-6 relative w-full h-min min-h-[600px] p-5 py-[100px] text-syne overflow-hidden
                     ${!toggled ? 'bg-lighte3' : 'bg-dark17'}`}>

        {/* ------------------------- Genre Tab */}

        <div className="lg:col-span-2 col-span-5 sm:col-span-3 p-6 flex flex-col ">
          <div className={`title text-4xl border-b font-semibold
                     ${!toggled ? 'text-dark17 border-dark17' : 'text-lighte3 border-lighte3'} ps-6 pb-6 w-full`}>
            GENRE
          </div>
          <ul className='w-full h-min flex-1 '>
            {['Faces', 'Architecture', 'Horizons', 'Abstract'].map((genre, index) => (
              <li
                key={genre}
                ref={(el) => (listItemRefs.current[index] = el)}
                className={`w-full h-min opacity-0`} // Set initial opacity to 0
                style={{ animationDelay: `${index * 0.2}s` }} // Adjust delay as needed
              >
                <Link to={'/gallery'}
                  className={`w-full flex justify-between border-b rounded-lg ${!toggled ? 'border-dark17 text-dark17 hover:bg-dark24 hover:text-lighte3' : 'text-white hover:bg-white hover:text-dark17 border-lighte3'} text-3xl p-3`}
                >
                  <span>{genre}</span>
                  <MdArrowOutward />
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* ------------------------- Macro Image Tab */}

        <div className="lg:col-span-2 col-span-5 sm:col-span-4 min-h-[300px] rounded-3xl p-6 flex flex-col justify-between
        bg-[url('https://images.unsplash.com/photo-1718555177136-f15cfa9ad749?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
        bg-cover bg-center
        ">
          <div className="up"></div>
          <div className="below flex justify-between">
            <p className={`text-white text-4xl w-[80%]`}>See the world differently through a macro perspective.</p>
            <button
              className={`rightbottomblob rounded-full transition duration-1000  ${!rotate ? 'rotate-[360deg]' : ''}`}
              onClick={rotatebtn}
            >
              <div
                className={`explorebtn text-3xl flex items-center justify-center w-[50px] h-[50px] border rounded-full
                text-white border-white  
                `}
              >
                <MdArrowOutward />
              </div>
            </button>
          </div>
        </div>

        {/* ------------------------- Monumental Cd Tab */}

        <div className="absolute right-[-150px] top-[100px] rounded-full w-[400px] h-[400px]
                      bg-[url('https://images.unsplash.com/photo-1662696931052-65a11c38bf3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                      bg-cover bg-center
                      blur-lg sm:blur-sm md:blur-0 hidden sm:flex
                      flex justify-center items-center">
          <button
            className={`rightbottomblob rounded-full transition duration-1000  ${!rotate ? 'rotate-[360deg]' : ''}`}
            onClick={rotatebtn}
          >
            <div
              className={`explorebtn text-3xl flex items-center justify-center w-[50px] h-[50px] rounded-full
                ${!toggled ? 'text-dark17 bg-white' : 'text-white bg-dark17'} 
                `}
            >
              <MdArrowOutward />
            </div>
          </button>
        </div>


      </div>


      {/* -------------------------------------------------- Section 2 Gallery Slider Starts Here */}


      <div className={`sec-2-back w-full h-min ${!toggled ? 'bg-lighte3' : 'bg-dark17'} text-clip overflow-hidden
               flex flex-col items-center gap-[20px]`}>
        <div className={`titlestrip w-full h-[80px] text-5xl lg:text-7xl xl:text-9xl flex items-center
                 overflow-hidden text-syne font-semibold 
                ${!toggled ? 'bg-dark17' : 'bg-lighte3'}`}>
          <div className={`text whitespace-nowrap w-[110%] translate-x-[-200px] ${!toggled ? 'text-clip text-lighte3' : 'text-clip text-dark17'}`}>
            Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery Gallery
          </div>
        </div>

        <button
          className={`rightbottomblob rounded-full transition duration-1000 animate-bounce ${!rotate ? 'rotate-[360deg]' : ''}`}
          onClick={rotatebtn}
        >
          <Link
            to={'/gallery'}
            className={`explorebtn text-7xl flex items-center justify-center w-[80px] h-[80px] rounded-full
                ${!toggled ? 'text-dark17' : 'text-white'} 
                `}
          >
            <MdArrowDownward />
          </Link>
        </button>

        <div className="w-full h-[300px] md:h-[600px] md:max-h-[600px] rounded-[100px_100px_0px_0px] overflow-hidden">
          <SliderImg />
        </div>
      </div>



    </div>
  );
}
