
"use client";

import { useState } from "react";

import FormCWrapper, { InputWrapper, SubmitButton } from "./Form.style";


const Form = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        if(event.target.name === 'name') setName(event.target.value);
        else if (event.target.name === 'email') setEmail(event.target.value);
        else alert('Error');

    }

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)  => {

        event.preventDefault();

        try {

            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            });

            if (response.status === 200) {
                setEmail('')
                setName('')
                alert('Guardado correctamente')
            }

            else if (response.status === 500) {
                alert('Error 500')
            }

            else alert ('Error desconocido')


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <FormCWrapper onSubmit = {handleSubmit}>

            <InputWrapper>
                <label> Nombre </label>
                <input
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {handleInputChange}
                    placeholder = "Introduce tu nombre..."
                />
            </InputWrapper>

            <InputWrapper>
                <label> Email </label>
                <input
                    type = "text"
                    name = "email"
                    value = {email}
                    onChange = {handleInputChange}
                    placeholder = "Introduce tu email..."
                />
            </InputWrapper>

            <SubmitButton
                type = "submit"
                value = "Enviar"
            />
        
        </FormCWrapper>
    )
}

export default Form
