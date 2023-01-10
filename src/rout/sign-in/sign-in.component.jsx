import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebise.utils"

import SingUpForm from "../../components/sign-up-form/sign-up-form-components"

import './sign-in.style.scss'

import SignInForm from '../../components/sign-in-form/sign-in-form.component'
const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Signin Page</h1>
            <div className="sign-in-page">

                <SignInForm />
                <SingUpForm />
            </div>
        </div>

    )

}


export default SignIn