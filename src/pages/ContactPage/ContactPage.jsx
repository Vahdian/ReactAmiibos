import React from 'react';
import { useForm } from 'react-hook-form';
 
export function ContactPage(){
    const{ register, handleSubmit, watch, errors, reset} = useForm()
 const doSubmit = (data) =>{
     console.log(data)
     reset()
 }
    return(
        <div>
            <form onSubmit={handleSubmit(doSubmit)}>
                <label>Name
                    <input type="text" name="name" ref={register({required: true, minLength:4})}></input>
                    {errors.name && <span>Name needs to be longer than 4 chars</span>}
                </label>
                <label>Surname
                    <input type="text" name="suname" ref={register}></input>
                </label>
                <input type="submit" value="SEND"></input>
            </form>
        </div>
    )
}