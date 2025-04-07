import Footer from "./Common/Footer"
import Menubar from "./Common/Menubar"
const ThemeOneLayout = ({ domainInfo, children }) => {
    return (
        <>
            <Menubar domainInfo={domainInfo}/>
            {children}
            <Footer domainInfo={domainInfo} />
        </>
    )
}
export default ThemeOneLayout;