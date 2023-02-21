import InputField from "@/pages/component/InputField";
import style from "@/styles/account/SignUp.module.scss"
import { useRouter } from "next/router";
import { useState } from "react";

const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()

    const handleFormSubmit = async (e:any) => {
        e.preventDefault();

        const newUser:User = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            mobile_phone_number: mobilePhoneNumber,
            password: password,
            role_id: 1,
            subscribed: true ,
            status: "Active"
        }

        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(mobilePhoneNumber)
        console.log(password)

        const response = await SignUp(newUser)
        if(response === 404) {
            alert("Error in sign-up")
        } else {
            alert("Sign-up successfull! Account created.")
            router.push("/sign-in")
        }
    }

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