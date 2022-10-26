const Slider = ({value, min, max, setValue}) => {
    return (
        <input type={'range'} value={value} min={min} max={max} onChange={evt =>setValue(evt.target.value)}>
        </input>
    )
}

export default Slider;
