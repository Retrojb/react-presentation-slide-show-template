
const SingleRow = (childern) => {
    return (
        <>
            <div className='grid border-3 border-round lg:min-w-screen' style={{ height: '98vh' }}>
                <div className='lg:col-12 border-3 border-round lg:max-h-screen' style={{ height: '90vh' }}>
                    {childern}
                </div>

            </div>
        </>
    )
}

export default SingleRow;