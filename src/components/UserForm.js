import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { authAction } from '../store/auth'

const UserForm = () => {
    const emailInp = useRef();
    const passowrdInp = useRef();
    const dispatch = useDispatch();
    const signinHandler = (e) => {
        e.preventDefault();
        if (emailInp.current.value.trim() === '' || passowrdInp.current.value.trim() === '') return;
        dispatch(authAction.login());
    }
    return (
        <form onSubmit={signinHandler}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' ref={emailInp} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' ref={passowrdInp} />
            </div>
            <button>Login</button>
        </form>
    )
}

export default UserForm