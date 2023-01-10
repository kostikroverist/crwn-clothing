import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component'

import FormInput from '../../components/form-input/form-input.conponent'

import './sign-in-form.style.scss'


import { useState, } from 'react'
import { signInWithGooglePopUp, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebise.utils'


const defaultFromFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFromFields);


    const { email, password } = formFields




    const resetFormFields = () => {
        setFormFields(defaultFromFields)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;


        setFormFields({ ...formFields, [name]: value });

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const { email, password, confirmPassword } = event.target;


        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);


            resetFormFields();

        } catch (e) {

            switch (e.code) {
                case 'auth/wrong-password':
                    alert('wrong password')
                    break;
                case 'auth/user-not-found':
                    alert('user not found')
                    break;
                default:
                    console.log(e);
            }
        }


    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopUp();
    }
    return (

        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span> log in with your email and password </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type='email' onChange={handleChange} name="email" value={email} />
                <FormInput label='Password' type='password' onChange={handleChange} name='password' value={password} />
                <div className="form-button-style">
                    <Button type='submit'>sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>sign In Google</Button>
                </div>

            </form>
        </div>

    )

}

export default SignInForm