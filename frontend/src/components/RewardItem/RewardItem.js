import './RewardItem.css'
// import { useState, useEffect } from 'react'

const RewardItem = ({name, points, id, pointsBalance, updateUIPoints }) => {

    const handleClick = async (reward_id) => {
        
        if (pointsBalance < points) {
            console.log('Total points: ', pointsBalance)
            console.log('Points: ', points)
            alert('Error! You do not have enough points.')
        } else if (pointsBalance >= points && reward_id == 13 ) {
            alert('Sucess! A tree has been planted in your name. Check your garden.')
            addTree()
            addRewardLog(reward_id)
            updateAPIPoints() 
            const newBalance = pointsBalance - points
            updateUIPoints(newBalance)
            console.log('Tree route')
        } else {
            alert('Sucess! The voucher has been sent to your email address.')
            addRewardLog(reward_id)
            updateAPIPoints() 
            const newBalance = pointsBalance - points
            updateUIPoints(newBalance)
            console.log('Normal route')
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
