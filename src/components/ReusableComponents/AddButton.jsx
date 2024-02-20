const AddButton = ({children, onClick, disabled}) => {
    return <div className="w-[25%] flex justify-end">
        <button
            className="group flex gap-2 items-center rounded-full py-3 px-5 transition-all ease-in-out"
            onClick={onClick} disabled={disabled && true}>
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                    <path className="group-hover:stroke-perfect-blue-hover group-active:stroke-perfect-blue-active group-disabled:stroke-gray" d="M4 12H20M12 4V20" stroke="#1A96BE" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </g>
            </svg>
            <span className="w-fit text-[1.5rem] tracking-wide text-perfect-blue group-hover:text-perfect-blue-hover group-active:text-perfect-blue-active group-disabled:text-gray">{children}</span>
        </button>
    </div>
}

export default AddButton;