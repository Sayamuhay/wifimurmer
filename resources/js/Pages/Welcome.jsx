import { Link, Head } from '@inertiajs/inertia-react';
import { useMatchMedia } from '@/useMatchMedia';
import { useRef } from 'react';
import "@/css/app.css";
// import Navbar from '@/Components/Navbar';
// import Hero from '@/Components/Hero'
// import Megaverse from '@/Components/Megaverse';
// import BottomNavbar from '@/Components/BottomNavbar';
// import Privilage from '@/Components/Privilege';
// import Plans from '@/Components/Plans';
// import Contact from '@/Components/Contact';
// import Footer from '@/Components/Footer';
// import HeaderLogo from '@/Components/Mobile/Header';
// import MobileHero from '@/Components/Mobile/MobileHero';
import Dekstop from './Dekstop/Dekstop';
import Mobile from './Mobile/Mobile';





export default function Welcome(props) {



    const isDekstopResolution = useMatchMedia("(min-width:992px)", true);
    const isMobileResolution = useMatchMedia("(max-width:992px)", true);

    return (
        <body style={{ backgroundColor: '#ECF2F5' }} className="subpixel-antialiased ">
            <>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />



                {isDekstopResolution &&
                    <>
                        <Dekstop />
                    </>
                }

                {isMobileResolution &&
                    <>
                        <Mobile />
                    </>
                }

            </>
        </body>
    );
}
