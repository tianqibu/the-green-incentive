const Filler = () => {

    const percentage = localStorage.getItem('percentage')
    return (
        <div className="filler" style={{ width: `${percentage}%` }}>{percentage}%</div>
    )
}

export default Filler
