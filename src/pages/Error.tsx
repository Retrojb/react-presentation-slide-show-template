import { useRouteError } from "react-router-dom";
import NavSidebar from "../components/Common/NavSidebar";
import Footer from "../components/Common/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <NavSidebar />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Footer />
        </div>
    );
}

export default ErrorPage