import { useRef, useState, Component, useEffect } from "react";
import logo from "@/Assets/logo.png";
import linknet from "@/Assets/linknet_w.png";
import benefit from "@/Assets/benefit.png";
import whatsapp from "@/Assets/whatsapp.png";
import "@/css/app.css";
// ----------------------------------------------- 
import { IoLocationSharp } from "react-icons/io5";
import Hero from "@/Components/Hero";
import Privilage from "@/Components/Privilege";
import Megaverse from "@/Components/Megaverse";
import Plans from "@/Components/Plans";
import Contact from "@/Components/Contact";
import { Element, Link, animateScroll as scroll, scroller } from 'react-scroll';

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function Dekstop() {

    // const plans = useRef(null);
    // const hero = useRef(null);
    // const about = useRef(null);
    // const contact = useRef(null);

    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: "smooth",
    //     });
    // };





    return (
        <>

            {/* Navbar */}
            <Navbar />

            {/* fab */}
            <div className="fixed flex bottom-10 right-10 z-50">
                <button className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg"><a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank"><img src={whatsapp} className='h-10' alt="" /></a></button>
            </div>

            <div className="pl-5 pr-5">

                {/* Hero */}
                <Element name="home">
                    <Hero />
                </Element>

                {/* privilage */}
                <div className="mt-15">
                    <Privilage />
                </div>

                {/* Megaverse */}
                <Element name="about">
                    <Megaverse id="about" />
                </Element>

                {/* Plans */}
                <Element name="plans">
                    <Plans />
                </Element>

                {/* Contact */}
                <Element name="contact">
                    <Contact id="contact" />
                </Element>

            </div>

            {/* Footer */}
            <footer className=" mt-16 bg-blue-800  text-neutral-content">
                <div className="h-full">
                    <div className="custom-shape-divider-top-1665712299">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="  mt-5 pl-10 pr-10 pb-5 place-content-between" >
                        <div className="">

                            <div className="footer place-self-center">
                                <div>
                                    <img src={logo} alt="" className="bg-white p-5 h-24 w-auto rounded-md" />
                                    <img src={linknet} alt="" className="p-5 h-24 w-auto rounded-md mt-5" />
                                </div>
                                <div className="grid grid-cols-2 gap-5 ">
                                    <div className="grid gap-5">
                                        <Link activeClass="none" to="home" spy={true} smooth={true} duration={500} offset={-100} className="link link-hover text-white text-2xl font-bold" >Beranda</Link>
                                        <Link activeClass="none" to="plans" spy={true} smooth={true} duration={500} offset={-100} className="link link-hover text-white text-2xl font-bold" >Harga</Link>
                                        <Link activeClass="none" to="about" spy={true} smooth={true} duration={500} offset={-100} className="link link-hover text-white text-2xl font-bold" >Tentang</Link>
                                    </div>
                                    <div className="grid gap-5">
                                        <Link activeClass="none" to="contact" spy={true} smooth={true} duration={500} offset={-100} className="link link-hover text-white text-2xl font-bold" >Kontak</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10 flex place-content-between place-items-center ">
                                <div className="flex text-center place-content-start place-items-center">
                                    <div className="text-white text-4xl">
                                        <IoLocationSharp />
                                    </div>
                                    <div>
                                        <p>Balubur Town Square Lt 3 Jl.</p>
                                        <p> Tamansari No.19 – 20 Bandung 40116</p>
                                    </div>
                                </div>

                                <div className="grid place-content-end justify-items-end">

                                    <img src={benefit} alt="" className="h-10 mb-5  w-auto" />
                                    <p className="text-lg">© 2022 Unofficial Website from First Media Reseller. All rights reserved.</p>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>






            </footer>


        </>
    )

}

export default Dekstop