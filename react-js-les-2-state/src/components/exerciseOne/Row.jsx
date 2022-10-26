const Row = ({factor1, factor2}) => {
    return (
        <div className={'row'}>
            {factor1} x {factor2} = {factor1 * factor2}
        </div>
    )
}

export default Row;
