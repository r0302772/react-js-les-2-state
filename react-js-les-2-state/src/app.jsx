import Exercise from "./components/Exercise.jsx";
import ExerciseOne from "./components/exerciseOne/ExerciseOne.jsx";
import ExerciseTwo from "./components/exerciseTwo/ExerciseTwo.jsx";
import ExerciseThree from "./components/exerciseThree/ExerciseThree.jsx";
import ExerciseFour from "./components/exerciseFour/ExerciseFour.jsx";
import ExerciseFive from "./components/exerciseFive/ExerciseFive.jsx";
import ExerciseSix from "./components/exerciseSix/exerciseSix.jsx";
import ExerciseSeven from "./components/exerciseSeven/exerciseSeven.jsx";
import ExerciseEight from "./components/exerciseEight/ExerciseEight.jsx";
import styled from "styled-components";
import {useState} from "react";

const OpenCloseBtn = styled.div`
  box-shadow: 7px 2px 8px 1px rgba(18, 89, 46, 0.67);
  background: #3a5d9b;
  color: #f5f5f5;
  height: 3em;
  margin: .5em .5em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    &:hover {
      cursor: pointer;
    }

    &:active {
      box-shadow: 7px 2px 8px 1px #eeeeee;
    }
`

const exercises = [
    {title: 'Multiplication Table', children: () => <ExerciseOne/>},
    {title: 'Rater', children: () => <ExerciseTwo/>, background: '#77EEEE'},
    {title: 'Progressbar', children: () => <ExerciseThree/>},
    {title: 'Number grid', children: () => <ExerciseFour/>, background: '#77EEEE'},
    {title: 'Comment Card', children: () => <ExerciseFive/>},
    {title: 'Calculator', children: () => <ExerciseSix/>, background: '#77EEEE'},
    {title: 'BMI Calulator', children: () => <ExerciseSeven/>},
    {title: 'Comments en Lifting State', children: () => <ExerciseEight/>, background: '#77EEEE'}
]

const App = () => {
    const [openExercises, setOpenExercises] = useState(Array(exercises.length).fill(true))

    const toggleIsOpen = (i) => {
        setOpenExercises(o => {
            const newOpen = [...o]
            newOpen[i] = !newOpen[i]
            return newOpen
        })
    }

    return (
        <>
            <OpenCloseBtn onClick={() => setOpenExercises(Array(exercises.length).fill(true))}>Open all
                exercises</OpenCloseBtn>
            <OpenCloseBtn onClick={() => setOpenExercises(Array(exercises.length).fill(false))}>Close all
                exercises</OpenCloseBtn>
            {exercises.map((exercise, i) => (
                <Exercise title={`Exercise ${i + 1}: ${exercise.title}`} background={exercise.background}
                          key={i} isOpen={openExercises[i]} toggleIsOpen={() => toggleIsOpen(i)}>
                    {exercise.children()}
                </Exercise>
            ))}
        </>
    )
}

export default App;
