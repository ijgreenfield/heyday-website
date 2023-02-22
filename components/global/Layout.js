import AnnouncementBar from "../molecules/AnnouncementBar";
import Header from "../global/Header"
import Footer from "../global/Footer"
import localFont from '@next/font/local'

const cadiz = localFont({ src: '../../public/fonts/Cadiz.woff2'})


export default function Layout({ children }) {
    return (
        <div className={cadiz.className}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}