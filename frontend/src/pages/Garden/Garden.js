import './Garden.css'
import Title from '../../images/garden_title.png'
import Tree from '../../images/tree.png'
import { useState } from 'react'

const Garden = () => {
    
    // useState is set as 12 as a test
    const [ treesPlanted, setTreesPlanted ] = useState(12)

    return (
        <div className="garden-container">
            <img src={Title} alt="Trees grown thanks to you" className="title"></img>
            <div className="tree-container">
                {[...Array(treesPlanted)].map(
                    (value: undefined, index: number) => (
                        <img src={Tree} alt="Tree" className="tree" />
                    )
                )}
            </div>
            <h1>{treesPlanted} trees 👏🏻</h1>
        </div>
    )
}

export default Garden
