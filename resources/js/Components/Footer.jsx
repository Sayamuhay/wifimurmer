import logo from "@/Assets/logo.png";
import linknet from "@/Assets/linknet_w.png";
import benefit from "@/Assets/benefit.png";
import "@/css/app.css";
import { IoLocationSharp } from "react-icons/io5";
import { Link, animateScroll as scroll, scroller } from "react-scroll";


function Footer() {

    return (

        <>

            <footer className=" mt-32 bg-blue-800  text-neutral-content">
                <div className="h-full">
                    <div class="custom-shape-divider-top-1665712299">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>

                    <div className="  mt-5 pl-10 pr-10 pb-5 place-content-between" >
                        <div className="">

                            <div className="footer place-self-center">
                                <div>
                                    <img src={logo} alt="" className="bg-white p-5 h-24 w-auto rounded-md" />
                                    <img src={linknet} alt="" className="p-5 h-24 w-auto rounded-md mt-5" />
                                </div>
                                <div className="grid grid-cols-2 gap-0 ">
                                    <div className="grid gap-5">
                                        <Link activeClass="none" to="home" spy={true} smooth={true} duration={500} offset={-100}>Beranda</Link>
                                        <Link activeClass="none" to="plans" spy={true} smooth={true} duration={500} offset={-100}>Harga</Link>
                                        <Link activeClass="none" to="about" spy={true} smooth={true} duration={500} offset={-100}>Tentang</Link>
                                    </div>
                                    <div className="grid gap-5">
                                        <Link activeClass="none" to="contact" spy={true} smooth={true} duration={500} offset={-100}>Kontak</Link>

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

export default Footer