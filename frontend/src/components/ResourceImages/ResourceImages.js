import './ResourceImages.css'

const ResourceImages = () => {
    return (
        <div className='resource-grid'>
            <a href='https://www.wwf.org.uk'><img src={process.env.PUBLIC_URL + `/resource_images/wwf.png`} alt='wwf'/></a>
            <a href='https://www.treehugger.com'><img src={process.env.PUBLIC_URL + `/resource_images/treehugger.png`} alt='treehugger'/></a>
            <a href='https://www.wildlifetrusts.org'><img src={process.env.PUBLIC_URL + `/resource_images/wildlife_trusts.png`} alt='wildlife trusts'/></a>
            <a href='https://friendsoftheearth.uk'><img src={process.env.PUBLIC_URL + `/resource_images/friends_of_the_earth.png`} alt='friends of the earth'/></a>
        </div>
    )
}

export default ResourceImages
