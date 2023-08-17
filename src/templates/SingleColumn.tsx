
const SingleColumn = () => {
    return (
        <>
            <div className='grid border-3 border-round lg:min-w-screen' style={{ height: '95vh' }}>
                <div className='lg:col-fixed border-3 border-round ' style={{ width:'2%' }} />
                <div className='lg:col border-3 border-round lg:max-h-screen' />
                <div className='lg:col-fixed border-3 border-round ' style={{ width:'2%' }} />
            </div>
        </>
    )
}

export default SingleColumn;