import logo from "@/Assets/logo.png";
import linknet from "@/Assets/linknet.png";
import benefit from "@/Assets/benefit.png";
import "@/css/app.css";
import { IoLocationSharp } from "react-icons/io5";

const MobileFooter = () => {

    return (

        <>
            <div className="mb-20">
                <div className="mt-16 flex gap-5 place-content-center place-items-center">
                    <img src={logo} className='h-8' alt="" />
                    <img src={linknet} className='h-7' alt="" />
                </div>

                <div className="mt-16">
                    <div className="flex text-center place-content-center place-items-center">
                        <div className="text-black text-3xl ">
                            <IoLocationSharp />
                        </div>
                        <div className="text-xs">
                            <p>Balubur Town Square Lt 3 Jl.</p>
                            <p> Tamansari No.19 – 20 Bandung 40116</p>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-xs">© 2022 Unofficial Website from First Media Reseller.<br /> All rights reserved.</p>
                    </div>
                </div>
            </div>

        </>

    )

}

export default MobileFooter