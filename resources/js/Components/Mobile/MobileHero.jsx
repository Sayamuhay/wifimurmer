
import React, { useState, Component, useEffect, useRef } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import hero from '@/json/hero.json';

const MobileHero = () => {

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


            <div className="carousel mt-10 ">
                <div className="relative h-52 rounded-md  overflow-hidden ">
                    <div className="flex gap-5 top left w-full h-full">

                        <div ref={carousel} className="carousel-container pb-10 overflow-x-auto overflow-y-hidden scrollbar hover:scrollbar-auto scrollbar-width-x-2 hover:scrollbar-thumb-zinc-700 snap-x snap-mandatory motion-safe:scroll-smooth">
                            <div className='flex flex-nowrap gap-5 '>
                                {hero.hero.map((resource, index) => {

                                    return (



                                        <div key={index} className="hero carousel-item items-start  ">

                                            <div className="mb-10">
                                                <img src={resource.imageUrl || ''} alt="" className='rounded-xl shadow-lg' />
                                                
                                            </div>
                                        </div>





                                    )

                                })};


                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </>


    )
}


export default MobileHero

