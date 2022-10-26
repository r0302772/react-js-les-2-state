import MultiplicationTable from "./MultiplicationTable.jsx";

const ExerciseOne = () => {
    return (
        <div className={'exercise'}>
            <MultiplicationTable table={9}/>
            <MultiplicationTable table={3}/>
        </div>
    )
}

export default ExerciseOne;
