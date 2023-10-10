import {Outlet} from 'react-router-dom'
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import Banner from '../header/Banner';

const Layout = () => {
    return (
        <div className='font-rubik'>
            <div>
                <Navbar></Navbar>
            </div>
            {/* <div>
                <Banner></Banner>
            </div> */}
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;