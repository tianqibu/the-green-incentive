import './SignUp.css'
import validate from './validation'

import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

const SignUp = () => {

    const history = useHistory() 
    const [ errors, setErrors ] = useState({});
    const [showFlash, setShowFlash] = useState(null);
    const [flash, setFlash] = useState({
        severity: '',
        message: '',                                  
    })
    const [ values, setValues ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const displayFlashMessage = () => {
        setShowFlash(true)
        setTimeout(() => {
        setShowFlash(false);
        }, 5000);
    }
    
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, 
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setErrors(validate(values))

        if (Object.keys(errors).length === 0) {
            const res = await fetch('/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: `${values.username}`,
                    email: `${values.email}`,
                    password: `${values.password}`,
                })
            })

            const data = await res.json()
        
            if (data.error) {
                setErrors({
                    general: data.error
                })
            }

            if (res.status === 200 && !data.error) {
                displayFlashMessage();
                setFlash({
                    message: `Success! ${values.username} has signed up`,
                    severity:'success'
                  })
                window.setTimeout(() => {
                    history.push('/sign-in')
                 }, 5000)
            } else {
                setFlash({
                    message: `Error: Unable to sign ${values.username} up. Please try again.`,
                    severity: 'error'
                  })
            }
        }
    }
        
    return (
        <div>
             { 
                showFlash
                ? (
                    <Fade in={showFlash} timeout={{ enter: 300, exit: 1000 }}>
                        <Alert className="alert" severity={flash.severity}>{flash.message}</Alert>
                    </Fade>
                    )
                : null 
            }

            <div className="get-started-container">
                <div className="form">
                    <h1>Get Started</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                        <input 
                            type="password" 
                            name="password2" 
                            placeholder="Confirm password"
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                        {errors.general && <p>{errors.general}</p>}
                        <input 
                            type="submit" 
                            value="Create account" 
                        />
                        <div className="redirect-container">
                            <p>Already have an account?<br></br><Link to="/sign-in" className="redirect-link">Sign in</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
