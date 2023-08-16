import {useEffect, useState} from "react";
import Slides from "./Slides";

interface Page {
    name: string
    title: string
    content: object;
}

const PageSlides = () => {
    const [currentPage, setCurrentPage] = useState<Page[]>([])
    return (
        <div>
            <Slides />
        </div>
    )
}

export default PageSlides;