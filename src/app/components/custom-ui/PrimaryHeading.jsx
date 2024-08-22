const PrimaryHeading = ({ children, redText, blackText, reduceBelow, maxFontSize, minFontSize, className = '', ...props }) => {

    const minText = minFontSize ? minFontSize : 24
    const maxText = maxFontSize ? maxFontSize : 48
    const reduceBefore = reduceBelow ? reduceBelow : 1024
    const sizeReducer = (100 / reduceBefore) * maxText

    return (
        <h2
            {...props}
            style={{ fontSize: `clamp(${minText}px, ${sizeReducer}vw, ${maxText}px)`, }}
            className={`${className} font-rubik font-semibold lg:leading-custom-xl`}>
            {children} <span className="text-lightRed">{redText}</span> {blackText}
        </h2>
    )
}

export default PrimaryHeading