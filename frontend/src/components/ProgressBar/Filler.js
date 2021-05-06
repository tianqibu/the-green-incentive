const Filler = ({ percentage }) => {
    return (
        <div className="filler" style={{ width: `${percentage}%` }}>{percentage}%</div>
    )
}

export default Filler
