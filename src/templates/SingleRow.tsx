import PageTitle from "../components/PageContent/PageTitle";
import BodyColumns from "../components/PageContent/BodyColumns";
import PageBodyText from "../components/PageContent/PageBodyText";
import PageSectionHeader from "../components/PageContent/PageSectionHeader";

const SingleRow = () => {
    return (
        <>
            <div className='grid border-3 border-round lg:min-w-screen' style={{ height: '95vh' }}>
                <div className='lg:col border-3 border-round lg:max-h-screen'>
                    <PageTitle text={'Hello'} ariaLabel={'h1'}/>
                </div>
                <div className='lg:col-12 border-3 border-round lg:max-h-screen' style={{ height: '90vh' }}>
                    <BodyColumns>
                        <PageSectionHeader text={'This is Section'} />
                        <PageBodyText text={'Something about this thing'} />


                    </BodyColumns>
                </div>

            </div>
        </>
    )
}

export default SingleRow;