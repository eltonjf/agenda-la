import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

 function MyApp({ Component, pageProps }) {
     return (
         <>
            <Header />
            <div className='max-w-7xl mx-auto shadow bg-gray-100 p-8'>
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
   )
 }

 export default MyApp