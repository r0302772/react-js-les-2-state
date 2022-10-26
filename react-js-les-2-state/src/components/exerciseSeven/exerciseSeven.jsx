import styled from 'styled-components'
import {useState} from "react";
import Slider from "./Slider.jsx";
import './range.css'

const BmiLabel = styled.div`
  font-family: Verdana, serif;
  font-size: 20px;
`

const calculateBMI = (hoogteInCm, massa) => {
    const hoogteInM = hoogteInCm / 100;
    return Math.round(massa / (hoogteInM * hoogteInM));
}

const BMIContainer = styled.div`
  padding: 20px 40px;
  border: #333 2px dotted;
  width: 450px;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

const ExerciseSeven = () => {
    const [height, setHeight] = useState(160)
    const [mass, setMass]=useState(50)

    return (
        <BMIContainer>
            <BmiLabel>Height: {height}</BmiLabel>
            <Slider value={height} min={60} max={210} setValue={setHeight}/>
            <BmiLabel>Mass: {mass}</BmiLabel>
            <Slider value={mass} min={30} max={160} setValue={setMass}/>
            <BmiLabel>BMI: {calculateBMI(height,mass)}</BmiLabel>
        </BMIContainer>
    )
}

export default ExerciseSeven;
