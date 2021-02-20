import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactPage.scss'
 
export function ContactPage(){
    const{ register, handleSubmit, watch, errors, reset} = useForm()
 const doSubmit = (data) =>{
     console.log(data)
     reset()
 }
    return(
        <div>
            <h1>Get info about the amiibos!</h1>
            <form onSubmit={handleSubmit(doSubmit)} className="formPage">
                <label>
                    <input type="text" name="name" ref={register({required: true, minLength:4})} className="formInput" placeholder="Insert your name"></input>
                    {errors.name && <span>Name needs to be longer than 4 chars</span>}
                </label>
                <label>
                    <input type="text" name="surname" ref={register} className="formInput" placeholder="Insert your surname"></input>
                </label>
                <label>
                    <input type="text" name="email" ref={register} className="formInput" placeholder="E-mail"></input>
                </label>
                <input type="submit" value="SEND" className="formButton"></input>
            </form>
        </div>
    )
}