import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ id }) {

    return (

        <>

            <div className="mt-24">
                <div className="flex place-content-center items-center text-center text-4xl font-semibold">
                    <p>Langganan Internet Rumah Stabil Hubungi sales kami </p>
                </div>
                <div className="flex place-content-center items-center text-center text-4xl font-semibold">
                    <p>dan beralihlah ke First Media hari ini!</p>
                </div>
            </div>

            <div className=" mt-16">
                <a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank" className="flex gap-10 place-content-center">
                    <div className="text-white rounded-full bg-blue-800 w-24 h-24 flex place-content-center place-items-center">
                        <div className="text-5xl"><FaPhoneAlt /></div>
                    </div>

                    <div className="text-white rounded-full pl-10 pr-10 bg-blue-800 w-auto h-24 flex place-content-center place-items-center">
                        <div className="text-5xl font-semibold">

                            0882 0022 78568

                        </div>
                    </div>

                </a>
            </div>

        </>

    )
}