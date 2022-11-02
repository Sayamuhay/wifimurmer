import { useRef, useState } from "react";
import logo from "@/Assets/logo.png";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import Popup from "reactjs-popup";


function Navbar() {

  const [modal, SetModal] = useState(false);

  const toggleModal = () => {
    SetModal(!modal)
  }

  return (

    <>

      <nav className="navbar z-50 sticky bg-white top-0 pl-10 pr-10 drop-shadow-md">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" className="h-9 w-auto" /></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-blue-800">
            <li><Link activeClass="none" to="home" spy={true} smooth={true} duration={500} offset={-100}>Beranda</Link></li>
            <li><Link activeClass="none" to="plans" spy={true} smooth={true} duration={500} offset={-100}>Harga</Link></li>
            <li><Link activeClass="none" to="about" spy={true} smooth={true} duration={500} offset={-100}>Tentang</Link></li>
            <li><Link activeClass="none" to="contact" spy={true} smooth={true} duration={500} offset={-100}>Kontak</Link></li>
            <li><label htmlFor="my-modal" className="">Legal Disclaimer</label></li>
          </ul>
        </div>
      </nav>

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
          <div className="modal-action sticky mt-10">

            <div className="btm-nav sticky bottom-0">
              <label htmlFor="my-modal" className="btn">Tutup</label>
            </div>

          </div>
        </label>
      </label>


    </>

  )
}

export default Navbar