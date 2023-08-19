
type PageTitleProps = {
    text: string,
    ariaLabel?: string
}
const PageTitle = ({ text }: PageTitleProps) => {
    return (
        <div className='flex align-items-center border-2 max-h-6rem min-h-3rem surface-500 shadow-4'>
            <p className='text-7xl font-semibold uppercase'>{text}</p>
        </div>
    )
}

export default PageTitle;