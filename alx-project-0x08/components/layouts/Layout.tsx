import Header from "./Header";
import Footer from "./Footer";
import { ReactComponentProps } from "@/interfaces";

const Layout: React.FC<ReactComponentProps> = ({children}) => {

    return(
        <div className="flex flex-col">
            <Header></Header>
            <main className="min-h-screen">{children}</main>
            <Footer></Footer>
        </div>
    )
}

export default Layout;