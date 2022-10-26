const Bar = ({percentage, color}) => {
    return (
        <>
            <g fill="none" stroke="lightgrey" strokeWidth="25">
                <path strokeLinecap="round" d="M20 55 l360 0"/>
            </g>
            <g fill="none" stroke={color} strokeWidth="25">
                <path strokeLinecap="round" d={`M20 55 l${percentage / 100 * 360} 0`}/>
            </g>
        </>
    )
}

export default Bar;
