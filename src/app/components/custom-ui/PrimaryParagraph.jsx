const PrimaryParagraph = ({ children, reduceBelow, maxFontSize, minFontSize, className = '', ...props }) => {
    const minText = minFontSize ? minFontSize : 14
    const maxText = maxFontSize ? maxFontSize : 16
    const reduceBefore = reduceBelow ? reduceBelow : 768
    const sizeReducer = (100 / reduceBefore) * maxText

    return (
        <p {...props}
            style={{ fontSize: `clamp(${minText}px, ${sizeReducer}vw, ${maxText}px)`, }}
            className={`${className} font-normal leading-5 sm:leading-6 text-offGray font-lato`}>
            {children}
        </p>
    )
}

export default PrimaryParagraph;