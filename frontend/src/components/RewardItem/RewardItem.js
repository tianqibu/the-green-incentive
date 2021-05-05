import './RewardItem.css'

const RewardItem = ({name, points, id}) => {

    const handleClick = async value => {
        console.log(value)

        // getUserPoints()

        // Check if user's points are enough to redeem reward
        // Success message to say voucher for reward has been sent to email

        // If user's points are not enough to redeem reward
        // Error message
        
        addRewardLog(value)
    }

    // Get user points
    // const getUserPoints = async () => {
    //     const res = await fetch('/api//users/current', {
    //         method: 'GET'
    //     })

    //     const data = res.json() 
    //     const points = data.points
    // }     

    const addRewardLog = async(id) => {
        await fetch('/api/rewards/log/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reward_id: `${id}`,
                user_id: 'user_id',
            })
        })
    }

    return (
        <div className="reward-item-container">
            <div className="child-one"><h2>{name}</h2></div>
            <div className="child-two"><h3>{points} points</h3></div>
            <div className="child-three"><button value={id} onClick={e => handleClick(e.target.value)}>Redeem</button></div>
        </div>
    )
}

export default RewardItem
