import PageTitle from "../components/PageContent/PageTitle";

const SingleColumn = () => {
    return (
        <>
            <div className='grid lg:min-w-screen' style={{ height: '95vh' }}>
                <div className='lg:col-fixed' style={{ width:'2%' }} />
                <div className='lg:col border-3 border-round lg:max-h-screen'>
                    <PageTitle text={'Hello'} ariaLabel={'h1'}/>
                </div>
                <div className='lg:col-fixed' style={{ width:'2%' }} />
            </div>
        </>
    )
}

export default SingleColumn;