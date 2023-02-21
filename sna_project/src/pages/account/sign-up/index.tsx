import InputField from "@/pages/component/InputField";
import style from "@/styles/account/SignUp.module.scss"
import { useState } from "react";

const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <>
            <form className={style.index}>
                <InputField required value={name} onChange={setName} placeholder="Name" />
                <InputField required value={email} onChange={setEmail} placeholder="Email" email />
                <InputField required value={number} onChange={setNumber} placeholder="Phone Number" number />
                <InputField required value={password} onChange={setPassword} placeholder="Password" password />
                <button>Sign Up</button>
            </form>
        </>
    );
}

export default SignIn;