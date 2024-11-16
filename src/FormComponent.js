import React, { useEffect, useRef, useState } from 'react';

function FormComponent() {
    // State to hold form values and errors
    const useRefHook = useRef(null);
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});

    // Validation function
    useEffect(()=>{
        useRefHook.current.focus();
    })
    const validate = () => {
        let errors = {};

        // Username validation
        if (!formValues.username) {
            errors.username = "Username is required";
        } else if (formValues.username.length < 3) {
            errors.username = "Username must be at least 3 characters";
        }

        // Email validation
        if (!formValues.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = "Email address is invalid";
        }

        // Password validation
        if (!formValues.password) {
            errors.password = "Password is required";
        } else if (formValues.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully!", formValues);
            // Clear form or take further actions
            setFormValues({
                username: '',
                email: '',
                password: ''
            });
            setErrors({});
        }
    };

    // Handle input change
    const handleChange = (event) => {
        console.log("calling")
        const { name, value } = event.target;
        let errors = {};
        if(name == 'username'){
            if(!value)
                errors.username = `${name} is required`
            else if(value.length < 2)
                errors.username = `${name} is required`
        }
        setErrors(errors);
        console.log(errors);
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    ref = {useRefHook}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
