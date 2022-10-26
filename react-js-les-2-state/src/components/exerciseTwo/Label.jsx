const getLabel = (score) => {
        if (score < 0.1) return  "Disaster";
        else if (score < 0.3) return  "Insufficient";
        else if (score < 0.5) return  "Sufficient";
        else if (score < 0.6) return  "Average";
        else if (score < 0.8) return  "Good";
        else if (score < 0.9) return  "Very good";
        else return  "Excellent";

/*    switch (true) {
        case score < 0.1:
            return "Disaster"
        case score < 0.3:
            return "Insufficient"
        case score < 0.5:
            return "Sufficient"
        case score < 0.6:
            return "Average"
        case score < 0.8:
            return "Good"
        case score < 0.9:
            return "Very good"
        default:
            return "Excellent"
    }*/
}

const Label = ({score}) => {
    return (
        <>
            {getLabel(score)}
        </>
    )

}

export default Label;
