const DoubleEvenColumn = () => {
    return (
        <>
            <div className='grid border-3 border-round lg:min-w-screen' style={{ height: '98vh' }}>
                <div className='col border-3 border-round lg:max-h-screen' style={{ height: '90vh' }} />
                <div className='lg:col-5 border-3 border-round lg:max-h-screen' style={{  height: '90vh' }}>

                </div>
                <div className='lg:col-5 border-3 border-round lg:max-h-screen' style={{ height: '90vh' }}>

                </div>
                <div className='col border-3 border-round lg:max-h-screen' style={{  height: '90vh' }} />
            </div>
        </>
    )
}

export default DoubleEvenColumn;