import MegaverseImg from '@/Assets/megaverse.png'
const MobileMegaverse = () => {
    return (
        <div className=' flex gap-5 place-content-center justify-content-center place-items-center mt-7'>
            <img src={MegaverseImg} alt="" className='h-24 w-24 rounded-full' />
            <div className='justify-content-start'>
            <h2 className='text-blue-800 font-bold text-lg'>DI RUMAH AJA</h2>
            <h3 className='text-md font-semibold'>Bawa Hiburan Lengkap Ke Rumah Anda</h3>
            
            </div>
        </div>
    )
}

export default MobileMegaverse