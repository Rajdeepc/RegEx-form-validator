import React from 'react';
import './form.css';

const FormComponent = () => {


    const patterns = {
        username:/^[a-z]{5,12}$/,
        email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        number:/^[\d]{10}$/,
        password:/^[\w@-]{8,20}$/,
        slug:/^[a-z\d-]{8,20}$/
    }

    const validate = (field, regex) => {
        if(field.target.value){
            if(regex.test(field.target.value)){
                field.target.className = 'valid'
            } else {
                field.target.className = 'invalid'
            }
        } else {
            field.target.className = ''
        }
        
    }

    return (
        <form>
            <div className="form-control">
                <input name="username" className='' placeholder="Username" type="text" onChange={(value) => validate(value,patterns.username)}/>
                <p className=""> Username must be alphaneumeric and must contain 5 - 12 characters</p>
            </div>
            <div className="form-control">
                <input name="email" placeholder="Email" type="text" onChange={(value) => validate(value,patterns.email)}/>
                <p>Email must be a valid email address, e.g me@mydomain.com</p>
            </div>
            <div className="form-control">
                <input name="number" placeholder="Number" type="number" onChange={(value) => validate(value,patterns.number)}/>
                <p>Telephone must be valid IN number(10 digits)</p>
            </div>
            <div className="form-control">
                <input name="password" placeholder="Password" type="password" onChange={(value) => validate(value,patterns.password)}/>
                <p>Password must be alphaneumeric(@, _,and - are also allowed) and be 8 - 20 characters</p>
            </div>
            <div className="form-control">
                <input name="slug" placeholder="slug" type="text" onChange={(value) => validate(value,patterns.slug)}/>
                <p>Slug must contain only lowercase letters,numbers and hyphens and be 8 - 20 characters</p>
            </div>
        </form>
    )
}

export default FormComponent
