
const singleColumn = ({ children }) => {
   return (
       <div className='flex flex-column md:flex-wrap justify-content-between'>
           <div className='flex flex-row gap-2'>
               <div className='lg:col-6 border-3'>
                   {children}
               </div>
           </div>
       </div>
   )
};

const doubleColumn = ({ children }) => {
    return (
        <div className='flex flex-column md:flex-wrap justify-content-between'>
            <div className='flex flex-row gap-2'>
                <div className='lg:col-6 border-3'>
                    {children}
                </div>
                <div className='lg:col-6 border-3'>
                    {children}
                </div>
            </div>
        </div>
    )
};

const BodyColumns = ({children}) => {
    return (
        <div className='flex flex-column md:flex-wrap justify-content-between'>
            <div className='flex flex-row gap-2'>
                <div className='lg:col-6 border-3'>
                    {children}
                </div>
                <div className='lg:col-6 border-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BodyColumns;