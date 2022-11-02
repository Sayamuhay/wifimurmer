import { useRef } from "react"
import HeaderLogo from "@/Components/Mobile/Header"
import MobileContact from "@/Components/Mobile/MobileContact"
import MobileFooter from "@/Components/Mobile/MobileFooter"
import MobileHero from "@/Components/Mobile/MobileHero"
import MobileMegaverse from "@/Components/Mobile/MobileMegaverse"
import MobilePLans from "@/Components/Mobile/MobilePlans"
import MobilePrivilege from "@/Components/Mobile/MobilePrivilege"
import { Element, Link, animateScroll as scroll, scroller } from 'react-scroll';

import { AiOutlineRight, AiFillSignal, AiFillHome, AiFillContacts, AiFillQuestionCircle } from "react-icons/ai";
import whatsapp from "@/Assets/whatsapp.png";


function Mobile() {


    const plans = useRef(null);
    const hero = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (

        <>

            <div className="pl-5 pt-10 pr-5 pb-24 motion-safe:scroll-smooth" >
                {/* Header Logo */}
                <HeaderLogo />

                {/* fab */}
                <div className="fixed flex bottom-28 right-5 z-50">
                    <a href="https://wa.me/62882002278568/?text=Hallo,%20saya%20mau%20pasang%20Firstmedia" target="_blank"><button className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg"><img src={whatsapp} className='h-8' alt="" /></button></a>
                </div>

                {/* Hero */}
                <Element name="home">
                    <MobileHero />
                </Element>

                {/* Privilege */}
                <MobilePrivilege />


                {/* Megaverse */}
                <Element name="about">
                    <MobileMegaverse />
                </Element>

                {/* PLans */}
                <Element name="plans">
                    <MobilePLans />
                </Element>

                {/* Contact */}
                <Element name="contact">
                    <MobileContact />
                </Element>

                {/* legal discalimer */}
                <div className="mt-10">
                    <label htmlFor="my-modal" className="btn border-none shadow-md hover:text-white bg-white flex place-content-between hover:bg-blue-800 content-center  text-black border-slate-200 w-full">
                        Legal Disclaimer
                        <div className=""><a href=""><AiOutlineRight className='font-bold text-lg' /></a></div>
                    </label>
                </div>

                {/* Modal */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />

                <label htmlFor="my-modal" className="modal cursor-pointer">
                    <label className="modal-box relative" for="">
                        <div>
                            <h1 className="font-bold text-2xl">Legal Disclaimer</h1>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mt-10">Disclaimer</h3>
                            <p className="mt-5">Informasi yang terdapat dalam website ini adalah untuk
                                tujuan umum. Informasi dan isi konten ini disediakan oleh
                                pembuat web dan bukan disediakan oleh First Media.
                                Kami senantiasa berusaha untuk menjaga informasi yang
                                aktual dan benar. First Media tidak membuat pernyataan
                                atau jaminan apapun, tersurat maupun tersirat, tentang
                                akurasi kelengkapan, kesesuaian, atau ketersediaan
                                ke situs web atau informasi, produk, jasa, atau gambar
                                terkait yang terdapat pada website ini untuk tujuan apapun.
                                Setiap ketergantungan yang anda tempatkan pada
                                informasi tersebut adalah risiko anda sendiri.

                                Dalam hal apapun First Media tidak bertanggung jawab
                                atas kerugian atau kerusakan termasuk tanpa batasan,
                                kerugian tidak langsung atau kerusakan apapun yang
                                timbul dari hilangnya data atau keuntungan yang timbul
                                dari penggunaan website ini. Melalui website ini anda dapat
                                me-link ke situs-situs lain yang tidak di bawah kendali
                                First Media. Kami tidak memiliki kontrol atas isi, sifat
                                dan ketersediaan situs-situs tersebut.</p>

                            <h3 className="font-bold text-lg mt-10">Kebijakan Privasi</h3>
                            <p className="mt-5">Kebijakan Privasi (Privacy Policy) ini menjelaskan bagaimana pemilik website mengumpulkan, menyimpan, menggunakan, memproses dan melindungi
                                informasi/data pribadi yang teridentifikasi yang Anda dapat berikan atau yang di catat sehubungan dengan layanan yang tersedia melalui situs (web) merupakan tanggung jawab pemilik situs (web) dan bukan tanggung jawab First Media. Dalam situs (web) ini mungkin terdapat berbagai link yang mengarah kepada situs lain dan atas hal tersebut kami tidak bertanggung jawab terhadap kebijakan penanganan informasi pribadi di situs-situs tersebut. Kami sangat menganjurkan bagi Anda untuk selalu melihat dan mempelajari kebijakan penanganan informasi pribadi di situs-situs tersebut sebelum memberikan informasi pribadi</p>

                            <h3 className="font-bold text-lg mt-10">Kebijakan Cookie</h3>
                            <p className="mt-5">
                                “Cookie” adalah pengidentifikasi alfanumerik yang kami transfer ke hard drive atau kartu memori Anda melalui web browser ketika Anda mengunjungi situs kami. Hal ini memungkinkan sistem milik Kami sendiri untuk mengenali Anda ketika Anda kembali mengunjungi situs kami Informasi ini digunakan untuk melacak penggunaan pengunjung Situs dan mengkompilasi laporan statistik mengenai aktivitas Situs. Untuk informasi lebih lanjut tentang cookie, kunjungi www.aboutcookies.org atau www.allaboutcookies.org. Jika Anda ingin menolak cookie kami, Anda dapat mengkonfigurasi browser Anda untuk melakukannya.
                            </p>

                            <h3 className="font-bold text-lg mt-10">Akses Data Pribadi</h3>
                            <p className="mt-5">
                                Ketika Anda memberikan Data Pribadi Anda kepada Kami, semua data diberikan merupakan tanggung jawab pemilik data dan pemilik situs (web), serta bukan merupakan tanggung First Media. mohon Anda pastikan sudah mengetahui resiko dalam pemberian data pribadi Anda.
                            </p>

                            <h3 className="font-bold text-lg mt-10">Persetujuan Perubahan Kebijakan Privasi</h3>
                            <p className="mt-5">
                                Dengan menggunakan Situs (web) atau layanan yang kami sediakan, Anda setuju dengan pengumpulan, penggunaan, dan pengolahan Data Pribadi Anda sebagaimana diatur dalam Kebijakan Privasi ini. Jika Anda menggunakan layanan kami Lebih lanjut, kami berhak mengumpulkan, menggunakan, mengungkap dan memproses Data Pribadi Anda sesuai dengan Kebijakan Privasi ini. Kami juga berhak dari waktu ke waktu dan tidak terbatas untuk mengubah isi kandungan sebagian atau secara keseluruhan dalam Kebijakan Privasi ini baik termasuk pada Situs ini, dan kami tidak wajib untuk memberitahukan kepada Anda.
                            </p>

                            <h3 className="font-bold text-lg mt-10">Kepatuhan Pada Proses Hukum</h3>
                            <p className="mt-5">
                                Kami dapat menyampaikan informasi pribadi jika diperintahkan oleh hukum dan/atau untuk (1) untuk kepentingan hukum atau proses pengadilan; (2) melindungi dan mempertahankan hak cipta, hak milik kami dan hak-hak lainnya; (3) melindungi terhadap penyalahgunaan atau penggunaan tanpa ijin dari situs (web) kami; atau (4) melindungi keamanan pribadi atau properti atas pengguna kami atau publik (di antara hal lainnya, hal ini berarti jika Anda memberikan informasi palsu atau berpura-pura menjadi orang lain, informasi mengenai diri Anda dapat kami sampaikan sebagai bagian dari penyelidikan atas tindakan Anda).
                            </p>

                        </div>
                        <div className="modal-action border-none">

                            <div className="border-none">
                                <label htmlFor="my-modal" className="btn border-none">Tutup</label>
                            </div>

                        </div>
                    </label>
                </label>

                {/* Footer */}
                <MobileFooter />



            </div>

            {/* Bottom Navbar */}
            <div className="btm-nav pb-5 h-24  motion-safe:scroll-smooth">
                <Link activeClass="none" to="home" spy={true} smooth={true} duration={500} offset={0}>
                    <AiFillHome className="h-5 w-5 text-black" />
                    <span className="btm-nav-label">
                        <a>Beranda</a>
                    </span>
                </Link>
                <Link activeClass="none" to="plans" spy={true} smooth={true} duration={500} offset={0}>
                    <AiFillSignal className="h-5 w-5 text-black" />
                    <span className="btm-nav-label">
                        <a>Harga</a>
                    </span>
                </Link>
                <Link activeClass="none" to="contact" spy={true} smooth={true} duration={500} offset={0}>
                    <AiFillContacts className="h-6 w-6 text-black" />
                    <span className="btm-nav-label">
                        <a>Kontak</a>
                    </span>
                </Link>

                <Link activeClass="none" to="about" spy={true} smooth={true} duration={500} offset={0} >
                    <AiFillQuestionCircle className="h-5 w-5 text-black" />
                    <span className="btm-nav-label">
                        <p>Tentang</p>
                    </span>
                </Link>
            </div>



        </>

    )

}

export default Mobile