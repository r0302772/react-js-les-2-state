import Header from "./Header.jsx";
import Row from "./Row.jsx";

const MultiplicationTable = ({table}) => {

    const output = []
    for (let i = 1; i < 11; i++) {
        output.push(<Row factor1={table} factor2={i}/>)
    }

    return (
        <div className={'table'}>
            <Header table={table}/>
            {output}
        </div>
    )
}

export default MultiplicationTable;
