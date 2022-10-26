const translate = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
}

const Header = ({table}) => {
    return (
        <div className={'header'}>
            {translate[table]}
        </div>
    )
}

export default Header;
