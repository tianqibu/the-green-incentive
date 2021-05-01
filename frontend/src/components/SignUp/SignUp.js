import './SignUp.css'
import validate from './validation'

import { useState } from 'react'

const SignUp = () => {

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const [ errors, setErrors ] = useState({});

        const handleChange = e => {
            const { name, value } = e.target
            setValues({
                ...values, 
                [name]: value
            })
        }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        setErrors(validate(values))
    }
        
    return (
        <div className="get-started-container">
            <div className="form">
                <h1>Get Started</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
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
                    <input 
                        type="submit" 
                        value="Create account" 
                    />
                </form>
            </div>
        </div>
    )
}

export default SignUp
