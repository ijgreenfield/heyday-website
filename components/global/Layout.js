import AnnouncementBar from "../molecules/AnnouncementBar";
import Header from "../global/Header"
import Footer from "../global/Footer"

export default function Layout({ children }) {
    return (
        <div>
            <AnnouncementBar />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}