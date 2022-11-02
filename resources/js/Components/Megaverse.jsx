import MegaverseImg from '@/Assets/megaverse.png'
const Megaverse = () => {
    return (
        <div className='p-10 flex gap-10 place-content-center align-middle items-center mt-24'>
            <img src={MegaverseImg} alt="" className='h-80 w-80 rounded-full' />
            <div className='justify-content-start'>
            <h2 className='text-blue-800 font-bold text-5xl'>DI RUMAH AJA</h2>
            <h3 className='text-2xl font-semibold'>Bawa Hiburan Lengkap Ke Rumah Anda</h3>
            <p className='text-start mt-5 text-lg'>Internet full unlimited dari First Media Bandung, Pasang Hari Ini Whatsapp aja! Bawa kebahagiaan dari Bisnis hingga hiburan lengkap ke rumah anda. Real Unlimited Bebas Berselancar & Streaming, Harga Mulai 200rban! Internet Bandung Terbaik & TV Kabel Gambar 4K , Pasang Firstmedia Sekarang!</p>
            </div>
        </div>
    )
}

export default Megaverse