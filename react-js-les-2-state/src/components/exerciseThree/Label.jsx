const Label = ({percentage, color}) => {
    return (
        <text x="180" y="25" fill={color}>
            {percentage} %
        </text>
    )
}

export default Label;
