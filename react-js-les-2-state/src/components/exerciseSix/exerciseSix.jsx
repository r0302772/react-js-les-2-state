import styled from 'styled-components';
import {useState} from "react";

const Calculator = styled.div`
  padding: 1.5em 2em;
  background-color: #00ace6;
  max-width: 21em;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

const CalculatorButton = styled.button`
  font-family: Verdana, serif;
  font-size: 2rem;
  margin: .25em;
  font-weight: bold;
  background-color: #CCCCCC;
  color: white;
  border-radius: 5px;
  width: 3em;
  height: 2em;
  display: inline-block;
  text-align: center;
  line-height: 2em;
`

const CalculatorScreen = styled.div`
  font-family: Verdana, serif;
  color: white;
  font-size: 2em;
  min-height: 2em;
`

const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'C', '0', 'Del'];

const ExerciseSix = () => {
    const [label, setLabel] = useState('')

    const handleBtnPress = (button) => {
        switch (button) {
            case 'Del':
                setLabel(l => l.slice(0, l.length - 1))
                break
            case "C":
                setLabel('')
                break
            default:
                setLabel(l => l + button)
        }
    }

    return (
        <Calculator>
            <CalculatorScreen>{label}</CalculatorScreen>
            {buttons.map(b => (
                <CalculatorButton key={b} onClick={() => handleBtnPress(b)}>
                    {b}
                </CalculatorButton>
            ))}
        </Calculator>
    )
}

export default ExerciseSix;
