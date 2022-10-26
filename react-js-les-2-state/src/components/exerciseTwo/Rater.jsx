import Label from "./Label.jsx";
import Star from "./Star.jsx";

const Rater = ({rating, max}) => {
    const score = rating / max

    const output = []
    for (let i = 1; i <= max; i++) {
        output.push(<Star full={i <= rating}/>)
    }

    return (
        <div className={'rater'}>
            <Label score={score}/>
            <div>
                {output}
            </div>
        </div>
    )
}

export default Rater;
