import { FaPhoneAlt } from "react-icons/fa";

const MobileContact = () => {

    return (

        <>

            <div className="mt-16">
                <div className="flex place-content-start items-center text-start text-xl font-semibold">
                    <p>Langganan Internet Rumah Stabil Hubungi sales kami </p>
                </div>
                <div className="flex place-content-start items-center text-start text-xl font-semibold">
                    <p>dan beralihlah ke First Media hari ini!</p>
                </div>
            </div>

            <div className="flex gap-2 place-content-start mt-5">

                <div className="text-white rounded-full bg-blue-800 p-5 flex place-content-center place-items-center">
                    <div className="text-xl"><FaPhoneAlt /></div>
                </div>

                <div className="text-white rounded-full pl-5 pr-5 bg-blue-800 w-auto flex place-content-center place-items-center">
                    <div className="text-xl font-semibold"><a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank">08954 0223 0108</a></div>
                </div>

            </div>

        </>

    )
}

export default MobileContact