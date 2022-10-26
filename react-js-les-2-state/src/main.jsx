import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import Exercise from "./components/Exercise.jsx"
import "./main.css"
import ExerciseOne from "./components/exerciseOne/ExerciseOne.jsx";
import ExerciseTwo from "./components/exerciseTwo/ExerciseTwo.jsx";
import ExerciseThree from "./components/exerciseThree/ExerciseThree.jsx";
import ExerciseFour from "./components/exerciseFour/ExerciseFour.jsx";
import ExerciseFive from "./components/exerciseFive/ExerciseFive.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Exercise title={'Exercise 1: Multiplication Table'}>
            <ExerciseOne/>
        </Exercise>
        <Exercise title={'Exercise 2: Rater'} background={'#77EEEE'}>
            <ExerciseTwo/>
        </Exercise>
        <Exercise title={'Exercise 3: Progressbar'}>
            <ExerciseThree/>
        </Exercise>
        <Exercise title={'Exercise 4: Number grid'} background={'#77EEEE'}>
            <ExerciseFour/>
        </Exercise>
        <Exercise title={'Exercise 5: Comment Card'}>
            <ExerciseFive/>
        </Exercise>
    </StrictMode>
)
