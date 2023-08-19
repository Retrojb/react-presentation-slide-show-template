import SlidesNavigation from "../Slides/SlidesNavigation";
import SingleRow from "../../templates/SingleRow";
import Header from "./NavSidebar";
import Footer from "./Footer";


const ContentContainer = ({ children }) => {
return (
    <div className='lg:col border-3 border-round lg:max-h-screen'>
        <Header />
        <div style={{height: '400px'}} />
            {children}
        <Footer />
    </div>
)
}

export default ContentContainer;