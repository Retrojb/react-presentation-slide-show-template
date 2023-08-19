import React from 'react';
import PageTitle from "../components/PageContent/PageTitle";
import BodyColumns from "../components/PageContent/BodyColumns";
import PageSectionHeader from "../components/PageContent/PageSectionHeader";
import Header from "../components/Common/NavSidebar";
import NavSidebar from "../components/Common/NavSidebar";

const ContactMe = (props) => {

    return (
        <>
            <div className='grid'>
                <NavSidebar />
                <div className='col'>
                    <PageTitle text={'About Me'} />
                    <BodyColumns>
                        <PageSectionHeader text={'John Baltes'} />
                    </BodyColumns>
                </div>
            </div>
        </>
    )
};

export default ContactMe;