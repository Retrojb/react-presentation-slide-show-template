
const DoubleRow = () => {
    return (
        <>
            <div className='grid border-3 border-round lg:min-w-screen' style={{ height: '98vh' }}>
                <div className='lg:col-6 border-3 border-round lg:max-h-screen' style={{ height: '90vh' }}>
                    <div className='flex gap-2'>
                        <div className='lg:col-6 border-3'>

                        </div>
                        <div className='lg:col-6 border-3'>

                        </div>
                    </div>
                </div>
                <div className='lg:col-6 border-3 border-round lg:max-h-screen' style={{  height: '90vh' }}>
                    <div className='flex gap-2'>
                        <div className='lg:col-6 border-3'>

                        </div>
                        <div className='lg:col-6 border-3'>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DoubleRow;