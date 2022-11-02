
import React, { useState, Component, useEffect, useRef } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import hero from '@/json/hero.json';
import whatsapp from "@/Assets/whatsapp.png";


const Hero = () => {

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);




    return (


        <>


            <div className="carousel m-5 mt-5 ">
                <div className="relative  overflow-hidden ">
                    <div className="flex gap-5 top left w-full h-full">
                        <button onClick={movePrev} className="text-zinc-900 w-10 h-full text-3xl text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300" disabled={isDisabled('prev')}>
                            <AiFillCaretLeft />

                        </button>
                        <div ref={carousel} className="carousel-container overflow-hidden scroll-smooth snap-x snap-mandatory">
                            <div className='flex  gap-5  '>

                                {hero.hero.slice(0, 3).map((resource, index) => {

                                    return (

                                        <div key={index} className="hero carousel-item   ">

                                            <div className="hero-content">

                                                <div className="shadow-lg">
                                                    <img src={resource.imageUrl || ''} className='rounded-xl' alt="Shoes" />
                                                    <div className="">
                                                        <div className="card-actions justify-end bottom-10 right-48 absolute">
                                                            <button className="btn shadow-lg text-lg bg-yellow-500 border-none hover:bg-yellow-800 hover:text-white text-black">
                                                                <a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank">
                                                                    Daftar Sekarang
                                                                </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    )
                                })}

                            </div>


                        </div>
                        <button onClick={moveNext} className="text-zinc-900 w-10 h-full text-3xl text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300" disabled={isDisabled('next')}>

                            <AiFillCaretRight />
                        </button>
                    </div>

                </div>
            </div>


        </>


    )
}





export default Hero

