const NumberGrid = ({n}) => {

    const output = []

    for (let i = 0; i < n; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push(<button className={'square'}>{i * n + j + 1}</button>)
        }
        output.push(<div className={'grid-row'}>{row}</div>)
    }

    return (
        <div className={'grid'}>
            {output}
        </div>
    )
}

export default NumberGrid;
