const PrimaryHeading = ({ data, redText, blackText, reduceBelow, maxFontSize, minFontSize, className = '', ...props }) => {
    const minText = minFontSize ? minFontSize : 24
    const maxText = maxFontSize ? maxFontSize : 48
    const reduceBefore = reduceBelow ? reduceBelow : 1280
    const sizeReducer = (110 / reduceBefore) * maxText

    return (
        <h2
            {...props}
            style={{ fontSize: `clamp(${minText}px, ${sizeReducer}vw, ${maxText}px)`, }}
            className={`${className} font-rubik font-semibold text-offBlack leading-7 sm:leading-9 md:leading-10 lg:leading-custom-lg xl:leading-custom-xl`}>
            {data} <span className="text-lightRed font-rubik font-semibold">{redText}</span> {blackText}
        </h2>
    )
}

export default PrimaryHeading