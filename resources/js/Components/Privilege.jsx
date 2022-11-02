import TV from '@/Assets/TV.png'
import connection from '@/Assets/connection.png'
import wifi from '@/Assets/wifi.png'

const Privilage = () => {
    return (
        <div className="gap-10 flex place-content-center place-content-between mt-15 ">
            <div className="card bg-transparent w-auto bg-base-100">
                <figure className="">
                    <img src={TV} alt="" className="w-28 h-20" />
                </figure>
                <div className="mt-5 items-center text-center">
                    <p className="card-title">Paket TV Kabel <br />Ratusan Channel HD</p>
                </div>
            </div>

            <div className="card bg-transparent w-auto bg-base-100">
                <figure className="">
                    <img src={connection} alt="" className="w-20 h-20" />
                </figure>
                <div className="mt-5 items-center text-center">
                    <p className="card-title">Kecepatan Internet <br />Yang Stabil</p>
                </div>
            </div>

            <div className="card bg-transparent w-auto bg-base-100">
                <figure className="">
                    <img src={wifi} alt="" className="w-24 h-20" />
                </figure>
                <div className="mt-5 items-center text-center">
                    <p className="card-title">Wifi <br />Di Rumah Unlimited</p>
                </div>
            </div>

        </div>
    )
}

export default Privilage