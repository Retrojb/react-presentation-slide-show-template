import {useEffect, useState} from "react";
import Slides from "./Slides";
import ContentContainer from "../Common/ContentContainer";
import SlidesNavigation from "./SlidesNavigation";
import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";

interface Page {
    name: string
    title: string
    content: object;
}

const PageSlides = () => {
    const [first, setFirst] = useState<number>(0);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
    }
    return (
        <>
            <ContentContainer>

            </ContentContainer>
        </>
    )
}

export default PageSlides;