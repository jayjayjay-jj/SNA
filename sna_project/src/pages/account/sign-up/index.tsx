import InputField from "@/pages/component/InputField";
import style from "@/styles/account/SignUp.module.scss"
import User from "@/types/User";
import Link from "next/link";
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
            <div className={style.index}>
                

                <form className={style.index}>
                    <div className={style.title}>
                        <Link href="/account/sign-up" className={style.title}>Register</Link>
                    </div>

                    <InputField required value={name} onChange={setName} placeholder="Name" />
                    <InputField required value={email} onChange={setEmail} placeholder="Email" email />
                    <InputField required value={number} onChange={setNumber} placeholder="Phone Number" number />
                    <InputField required value={password} onChange={setPassword} placeholder="Password" password />
                    <button className={style.button}>SIGN UP</button>

                    <div>
                        Already have an account?&nbsp;
                        <Link href="/account/sign-in" className={style.text}>Sign In</Link>
                    </div>
                </form>

                
            </div> 
        </>
    );
}

export default SignIn;