import Label from "./Label.jsx";
import Bar from "./Bar.jsx";

const ProgressBar = ({percentage, color}) => {
    return (
        <svg height="80" width="400">
            <Label percentage={percentage} color={color}/>
            <Bar percentage={percentage} color={color}/>
        </svg>
    )
}

export default ProgressBar;
