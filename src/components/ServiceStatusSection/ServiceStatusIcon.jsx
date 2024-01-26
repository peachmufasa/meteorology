const ServiceStatusIcon = ({curStatus}) => {
    return (
        <div>
            {curStatus === "on" ?
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_687_2)">
                        <rect x="4" y="4" width="38" height="38" rx="19" fill="#2F2F2F"/>
                        <rect x="4.5" y="4.5" width="37" height="37" rx="18.5" stroke="#99FE00"/>
                    </g>
                    <rect x="10" y="10" width="26" height="26" rx="13" fill="#99FE00"/>
                    <defs>
                        <filter id="filter0_d_687_2" x="0.9" y="0.9" width="44.2" height="44.2"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="1.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.598998 0 0 0 0 0.996159 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_687_2"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_687_2" result="shape"/>
                        </filter>
                    </defs>
                </svg> : <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_687_3)">
                        <rect x="4" y="4" width="38" height="38" rx="19" fill="#2F2F2F"/>
                        <rect x="4.5" y="4.5" width="37" height="37" rx="18.5" stroke="#FE4C00"/>
                    </g>
                    <rect x="10" y="10" width="26" height="26" rx="13" fill="#FE4C00"/>
                    <defs>
                        <filter id="filter0_d_687_3" x="0.9" y="0.9" width="44.2" height="44.2"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="1.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.996159 0 0 0 0 0.298848 0 0 0 0 0 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_687_3"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_687_3" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            }
        </div>
    )
}


export default ServiceStatusIcon;
