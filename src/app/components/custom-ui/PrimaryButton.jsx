const PrimaryButton = (props) => {
    return (
        <div className={`${props.gsapClass} flex`}>
            <button className={`sm:py-[11px] py-3 overflow-hidden hover:shadow-black-border px-6 group font-rubik font-semibold relative z-[1] duration-300 border border-transparent hover:border-white ease-linear text-sm sm:text-base rounded-lg ${props.className}`}>
                <span className="group-hover:drop-shadow-blue-sm duration-300 ease-linear">{props.text}</span>
                <span className="h-0 w-0 bg-black -z-10 opacity-0 group-hover:opacity-100 absolute duration-300 ease-linear top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 group-hover:h-24 group-hover:w-full"></span>
            </button>
        </div>
    )
}

export default PrimaryButton