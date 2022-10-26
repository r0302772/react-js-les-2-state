import Rater from "./Rater.jsx";

const ExerciseTwo = () => {
    return (
        <div className={'exercise'}>
            <Rater rating={7} max={8}/>
            <Rater rating={1} max={5}/>
            <Rater rating={3} max={3}/>
        </div>
    )
}

export default ExerciseTwo;
