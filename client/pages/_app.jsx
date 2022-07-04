import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../public/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import TopNav from '../components/TopNav';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ToastContainer position='top-center' />
            <TopNav />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp