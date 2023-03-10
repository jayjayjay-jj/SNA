import { ChangeEventHandler } from 'react';
import style from '@/pages/component/InputField.module.scss'

interface InputFieldProps {
    placeholder?: string,
    value?: any,
    onChange: any,

    email?: boolean,
    password?: boolean,
    number?: boolean,
    required?: boolean
}

const InputField = (props:InputFieldProps) => {

    const {placeholder, email, password, number, required, value, onChange} = props;

    const getInputType = () => {
        if(password) return "password";
        else if(email) return "email";
        else if(number) return "number";
        else return "text"
    }

    return (  
        <div>
            <input  type={getInputType()} 
                    placeholder={placeholder} 
                    className={style.inputField} 
                    required={required}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default InputField;