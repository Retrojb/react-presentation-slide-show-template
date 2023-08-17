
const DoubleRow = (children) => {
    return (
        <>
            <div className='grid border-3 border-round lg:min-w-screen' style={{ height: '98vh' }}>
                <div className='lg:col-6 border-3 border-round lg:max-h-screen' style={{ height: '90vh' }}>
                    {children}
                </div>
                <div className='lg:col-6 border-3 border-round lg:max-h-screen' style={{  height: '90vh' }}>
                    {children}
                </div>

            </div>
        </>
    )
}

export default DoubleRow;