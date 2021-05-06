import './RewardItem.css'


const RewardItem = ({name, points, id, pointsBalance, updateUIPoints, setFlash, displayFlashMessage }) => {

    const handleClick = async (reward_id) => {
        
        if (pointsBalance < points) {
            displayFlashMessage();
            setFlash({
                message: `Error! You do not have enough points.`,
                severity:'error'
            })
        } else if (pointsBalance >= points && reward_id == 13 ) {
            displayFlashMessage();
            setFlash({
                message: `Success! A tree has been planted in your name. Check your garden.`,
                severity:'success'
            })
            addTree()
            addRewardLog(reward_id)
            updateAPIPoints() 
            const newBalance = pointsBalance - points
            updateUIPoints(newBalance)
        } else {
            console.log(reward_id)
            displayFlashMessage();
            setFlash({
                message:`Success! A voucher for ${name} has been sent to your email address.`,
                severity:'success'
            })
            addRewardLog(reward_id)
            updateAPIPoints() 
            const newBalance = pointsBalance - points
            updateUIPoints(newBalance)
        }
    }

    const addTree = async () => {
        await fetch('/api/trees/add', {
            method: 'GET'
    })}    

    const addRewardLog = async(reward_id) => {
        await fetch('/api/rewards/log/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reward_id: `${reward_id}`
            })
        })
    }

    const updateAPIPoints = async () => {
        await fetch(`/api/points/subtract/${points}`, {
            method: 'GET'
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
