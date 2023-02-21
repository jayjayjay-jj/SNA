import InputField from "@/pages/component/InputField";
import style from "@/styles/account/SignIn.module.scss"
import User from "@/types/User";
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFormSubmitted = async (e:any) => {
        e.preventDefault();

        console.log(email)
        console.log(password)

        const userAttempt:User = {
            email: email,
            password: password
        }

        const response = await SignIn(userAttempt)
        // console.log("Response: " + response)
        if(response === 404) {
            alert("Sign-In Failed!")

        } else if(response === "Email not found!") {
            alert("Invalid Email!")

        } else if(response === "Password not found!") {
            alert("Invalid Password!") 
        
        } else {
            alert("Sign-In Success!")
            console.log(response)

            setCookie("AuthenticationCookie", response, 2)
            route.push("/")
        }
    }

    return ( 
        <>
            <form className={style.index}>
                <InputField required value={email} onChange={setEmail} placeholder="Email" email />
                <InputField required value={password} onChange={setPassword} placeholder="Password" password />
                <button>Sign In</button>
            </form>
        </>
    );
}

export default SignIn;