import './SignIn.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignIn = () => {

    const [ values, setValues ] = useState({
        username: '',
        password: '',
    })
 
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, 
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: `${values.username}`,
                password: `${values.password}`,
            })
        })

        if (res.status === 200) {
            console.log(`${values.username} is logged in`)
        } else {
            console.log(`Error: Unable to log ${values.username} in`)
        }
    }

    return (
        <div className="sign-in-container">
            <div className="form">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <input type="username" name="username" placeholder="Username" value={values.username} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
                    <input type="submit" value="Sign In" />
                </form>
                <div className="redirect-container">
                    <p>Don't already have an account?<br></br><Link to="/sign-up">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn
