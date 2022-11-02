import { useRef } from "react"

export default function Plans({id}) {
    return (
        <>
            <div id={id} className="flex place-content-center mt-24 ">

                <div className="paket-combo text-center">
                    <div className="group-126 flex-col-hcenter">
                        <p className="text-4xl font-bold">
                            PAKET COMBO <span className="font-medium">(TV+INTERNET)</span>
                        </p>
                        <p className="text-2xl mt-3 flex-hcenter">
                            Paket Attack Diskon 30% Bandung Area Terbatas Bonus All Channel ( ±300
                            channel )
                        </p>

                    </div>
                    <p className="text-xl mt-3 text-blue-800">
                        *Harga yang tertera bisa dikurangi Rp. 33.000 dengan mengurangi
                        channel sport <br />
                        *Gratis biaya pemasangan <br />
                        *Sudah termasuk PPN 11%
                    </p>
                    <p className="text-xl mt-3 text-blue-800">
                        
                    </p>
                </div>

            </div>

            <div className="mt-16 grid grid-rows-2 grid-flow-col gap-5 place-content-center">


                {/* combo pop */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center ">
                        <h2 className="card-title text-4xl text-center text-blue-800">Combo Family POP</h2>
                        <div className="group-47 flex-col-hcenter">
                            <div className="mt-10 flex">
                                <p className="text-lg text-black">Rp.</p>
                                <div className="group-7">
                                    <p className="text-4xl text-blue-800 font-bold">
                                        268.030<span className="text-base text-black font-normal">/bln</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-base text-center text-slate-600">Harga Promo 1 Tahun</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-disc ml-5 items-start text-xl font-medium text-black">
                            <li><p> Up To 25 Mbps </p></li>
                            <li><p> 97 Channel </p></li>
                            <li><p> All Channels 3 Bulan </p></li>
                        </ul>


                    </div>
                    <div className="mt-16 card-body items-center text-center">
                        <p className="text-base text-blue-800">*Free Registrasi & Survey</p>

                        <div className="card-actions mt-5 place-content-center">
                            <a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank">
                                <button className="btn btn-lg bg-blue-800 border-none hover:bg-blue-600">
                                    Buy Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* combo pop elite x1 4k */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center ">
                        <h2 className="card-title text-4xl text-center text-green-800">Combo Family POP</h2>
                        <div className="group-47 flex-col-hcenter">
                            <div className="mt-10 flex">
                                <p className="text-lg text-black">Rp.</p>
                                <div className="group-7">
                                    <p className="text-4xl text-green-800 font-bold">
                                        574.057<span className="text-base text-black font-normal">/bln</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-base text-center text-slate-600">Harga Promo 1 Tahun</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-disc ml-5 items-start text-xl font-medium text-black">
                            <li><p> Up To 85 Mbps </p></li>
                            <li><p> 97 Channel </p></li>
                            <li><p> All Channels 3 Bulan </p></li>
                        </ul>


                    </div>
                    <div className="mt-16 card-body items-center text-center">
                        <p className="text-base text-green-800">*Free Registrasi & Survey</p>

                        <div className="card-actions mt-5 place-content-center">
                            <a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank">
                                <button className="btn btn-lg bg-green-800 hover:bg-green-700 border-none">
                                    Buy Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* combo pop plus */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center ">
                        <h2 className="card-title text-4xl text-center text-red-700">Combo Family POP Plus</h2>
                        <div className="group-47 flex-col-hcenter">
                            <div className="mt-10 flex">
                                <p className="text-lg text-black">Rp.</p>
                                <div className="group-7">
                                    <p className="text-4xl text-red-700 font-bold">
                                        379.030<span className="text-base text-black font-normal">/bln</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-base text-center text-slate-600">Harga Promo 1 Tahun</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-disc ml-5 items-start text-xl font-medium text-black">
                            <li><p> Up To 50 Mbps </p></li>
                            <li><p> 97 Channel </p></li>
                            <li><p> All Channels 3 Bulan </p></li>
                        </ul>


                    </div>
                    <div className="mt-16 card-body items-center text-center">
                        <p className="text-base text-red-600">*Free Registrasi & Survey</p>

                        <div className="card-actions mt-5 place-content-center">
                            <a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank">
                                <button className="btn btn-lg bg-red-700 hover:bg-red-600 border-none">
                                    Buy Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* supreme x1 4k */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center ">
                        <h2 className="card-title text-4xl text-center text-pink-600">Supreme X1 4K</h2>
                        <div className="group-47 flex-col-hcenter">
                            <div className="mt-10 flex">
                                <p className="text-lg text-black">Rp.</p>
                                <div className="group-7">
                                    <p className="text-4xl text-pink-600 font-bold">
                                        814.927<span className="text-base text-black font-normal">/bln</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-base text-center text-slate-600">Harga Promo 1 Tahun</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-disc ml-5 items-start text-xl font-medium text-black">
                            <li><p> Up To 185 Mbps </p></li>
                            <li><p> 97 Channel </p></li>
                            <li><p> All Channels 3 Bulan </p></li>
                        </ul>


                    </div>
                    <div className="mt-16 card-body items-center text-center">
                        <p className="text-base text-pink-600">*Free Registrasi & Survey</p>
                        <div className="card-actions mt-5 place-content-center">
                            <a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank">
                                <button className="btn btn-lg bg-pink-600 hover:bg-pink-600 border-none">
                                    Buy Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>




        </>

    )
}