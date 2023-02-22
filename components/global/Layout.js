import AnnouncementBar from "../molecules/AnnouncementBar";
import Header from "../global/Header"
import Footer from "../global/Footer"
import localFont from '@next/font/local'

const cadiz = localFont({ src: '../../public/fonts/cadiz.woff2'})

export default function Layout({ children }) {
    return (
        <div className={cadiz.className}>
            <AnnouncementBar />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}