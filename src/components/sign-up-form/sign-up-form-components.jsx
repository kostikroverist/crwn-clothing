import { useState,  } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebise.utils'

import './sign-up-form.styles.scss'

import Button from '../button/button.component'

import FormInput from '../form-input/form-input.conponent'



const defaultFromFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFromFields);


    const { email, password, confirmPassword, displayName } = formFields



    const resetFormFields = () => {
        setFormFields(defaultFromFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const { email, password, confirmPassword } = event.target;

        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                alert('Cannot create user,email alreadty in use')
            }
            console.log('user created an error', e);
        }


    }


    const handleChange = (event) => {
        const { name, value } = event.target;


        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className='sign-up-container'>
            <h2>Dont have an account</h2>
            <span>Sign up your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} />
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button type='submit'>Sign up</Button>
            </form>

        </div>
    )
}

export default SignUpForm;