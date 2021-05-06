export default function validate (values) {

    let errors = {}

    if (!values.username) {
        errors.username = "Username is required"
    } else if (!(/^\S{3,}$/.test(values.username))) {
        errors.username = "Username cannot have whitespace"
    }

    if (!values.email) {
        errors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be 8 characters or more"
    }

    if (!values.password2) {
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }
    console.log(errors)
    console.log(Object.keys(errors).length)
    return errors
}

