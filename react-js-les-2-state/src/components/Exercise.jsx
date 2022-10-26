import styled from "styled-components";

const ExerciseTitleContainer = styled.div`
  font-family: "Lucida Sans", Monaco, monospace;
  font-size: 3rem;
  letter-spacing: 3px;
  color: #3A5D9B;
  font-weight: 300;
  font-style: oblique;
  line-height: 1.2;
`;

const ExerciseTitle = ({title}) => {
    return(
        <ExerciseTitleContainer>
            {title}
        </ExerciseTitleContainer>
    )
}

const Exercise = ({title, background, children}) => {
    const exerciseStyle = {
        boxShadow: "7px 2px 8px 1px rgba(18,89,46,0.67)",
        backgroundColor: background || "#EEEEEE",
        minHeight: "7em",
        padding: ".5em",
        margin: "1.5em .5em",
    }

    return (
        <div style={exerciseStyle}>
            <ExerciseTitle title={title}/>
            {children}
        </div>
    )
}

export default Exercise;
