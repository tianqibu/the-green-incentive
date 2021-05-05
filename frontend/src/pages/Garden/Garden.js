import './Garden.css'
import Title from '../../images/garden_title.png'
import Tree from '../../images/tree.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Garden = () => {
    
    // useState is set as 12 as a test
    const [ treesPlanted, setTreesPlanted ] = useState('')

    useEffect(() => {

        const fetchTrees = async () => {
            const res = await fetch('/api/users/current', {
              method: 'GET',
            })
    
            const data = await res.json()

            setTreesPlanted(data.trees_grown)

        }
    
    }, [])

    return (
        <div className="garden-container">
            <img src={Title} alt="Trees grown thanks to you" className="title"></img>
            <div className="tree-container">
                { treesPlanted.length > 0 && [...Array(treesPlanted)].map(
                    (value, index) => (
                        <img src={Tree} alt="Tree" className="tree" />
                    )
                )}
            </div>
            { treesPlanted.length > 0 
                ? (<h1>{treesPlanted} trees 👏🏻</h1>)
                : (<div>
                    <h3>You haven't planted any trees yet!<br></br>Head to rewards to redeem your points and plant a tree in your name, then check back here. </h3>
                    <Link to="/rewards"><button>Rewards</button></Link>
                   </div> 
                    )
            }
        </div>
    )
}

export default Garden
