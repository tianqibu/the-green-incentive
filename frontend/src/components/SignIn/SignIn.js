import './SignIn.css'

const SignIn = () => {
    return (
        <div className="sign-in-container">
            <div className="form">
                <h1>Sign In</h1>
                <form>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Sign In" />
                </form>
                <div className="sign-up-container">
                    <p>Don't already have an account?</p>
                    <a href="/sign-up">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default SignIn
