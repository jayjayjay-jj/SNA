import InputField from "@/pages/component/InputField";
import style from "@/styles/account/SignIn.module.scss"
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFormSubmitted = async (e:any) => {
        e.preventDefault();

        console.log(email)
        console.log(password)
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