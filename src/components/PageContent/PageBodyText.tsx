
type PageBodyTextProps = {
    text: string
    ariaLabel?: string
}
const PageBodyText = ({text}) => {
    return (
        <div className='flex flex-wrap'>
            <p className='text-xl line-height-2'>{text}</p>
        </div>
    )
}

export default PageBodyText