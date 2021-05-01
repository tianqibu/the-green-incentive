import Title from '../components/Title/Title'
import DashboardImages from '../components/DashboardImages/DashboardImages'


import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="title">
                <Title title="Hi, User"/>
            </div>
            <DashboardImages />
        </div>
    )
}

export default Dashboard
