const Filler = ({ percentage }) => {

    // const percentage = localStorage.getItem('percentage')
    console.log('Percentage: ', percentage)
    return (
        <div className="filler" style={{ width: `${percentage}%` }}>{percentage}%</div>
    )
}

export default Filler
