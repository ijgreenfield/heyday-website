import AnnouncementBar from "../molecules/AnnouncementBar";
import Header from "./Header/Header"
import Footer from "../global/Footer"
import localFont from '@next/font/local'
import SearchWrapper from "../organisms/ProductSearch/SearchWrapper";

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