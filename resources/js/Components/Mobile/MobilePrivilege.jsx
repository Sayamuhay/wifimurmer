import TV from '@/Assets/TV.png'
import connection from '@/Assets/connection.png'
import wifi from '@/Assets/wifi.png'

function MobilePrivilege() {

    return (
        <>

            <div className="gap-5 mt-7 flex font-semibold place-content-between ">
                <div className="card bg-transparent items-center   bg-base-100">
                    <div className="text-white rounded-full bg-white p-5 drop-shadow-md">
                        <img src={TV} alt="" className="h-6 " />
                    </div>

                    <div className="mt-5 items-center text-center">
                        <p className="text-xs">Paket TV Kabel <br /> Ratusan Channel HD</p>
                    </div>
                </div>

                <div className="card bg-transparent items-center w-auto bg-base-100">
                    <div className="text-white rounded-full bg-white p-5 drop-shadow-md">
                        <img src={connection} alt="" className=" h-7" />
                    </div>
                    <div className="mt-5 items-center text-center">
                        <p className="text-xs">Kecepatan Internet <br /> Yang Stabil</p>
                    </div>
                </div>

                <div className="card bg-transparent items-center w-auto bg-base-100">
                    <div className="text-white rounded-full bg-white p-5 drop-shadow-md">
                        <img src={wifi} alt="" className="h-6" />
                    </div>
                    <div className="mt-5 items-center text-center">
                        <p className="text-xs ">Wifi <br /> Di Rumah Unlimited</p>
                    </div>
                </div>

            </div>

        </>
    )

}

export default MobilePrivilege