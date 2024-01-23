const AddButton = ({children, onClick}) => {
    return <button className="flex gap-2 items-center rounded-full py-3 px-5 transition-all ease-in-out hover:bg-dark-gray/60 active:bg-dark-gray" onClick={onClick}>
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier">
                <path d="M4 12H20M12 4V20" stroke="#1A96BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
        <span className="text-3xl tracking-wide text-perfect-blue">{children}</span>
    </button>
}

export default AddButton;