/* eslint-disable no-useless-computed-key */
import React, { useRef, useState } from "react";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { ActionButton } from "../../buttons/style";
import { FormErrors, ToastMessage } from '../styles';

const formInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    formErrors: {
        email: '',
        message: '',
    },
    isLoading: false
}

export const getErrors = (formErrors) => {
    let error = ''
    for (const i in formErrors) {
        error += formErrors[i]
    }
    return error
}

export const validateEmail = (email) => {
    if (email) {
        const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/
        return emailRegex.test(email)
    }
}

const Form = () => {

    const [formState, setFormState] = useState(formInitialState);
    const formRef = useRef()

    const verifyErrors = () => {
        let errors = { ...formState.formErrors }
        errors = { ...errors, ['email']: (formState['email'] && validateEmail(formState['email'])) ? '' : 'Please enter a valid email address' }
        errors = { ...errors, ['message']: formState['message']?.trim() ? '' : 'Message is required' }

        setFormState((prevState) => ({ ...prevState, formErrors: errors }))
        return getErrors(errors)
    }

    const submitFormHandler = async (e) => {
        e.preventDefault();

        if (!verifyErrors()) {
            try {
                setFormState((prevState) => ({ ...prevState, isLoading: true }))
                await emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, formRef.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
                setFormState(formInitialState)
                toast.success(<ToastMessage>Email is sent. I will respond to you ASAP, Thank you.</ToastMessage>, {
                    position: "top-right",
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    progress: undefined,
                    transition: Zoom,
                    theme: "light",
                });
            } catch (error) {
                console.log(error)
            } finally {
                setFormState((prevState) => ({ ...prevState, isLoading: false }))
            }
        }
    }

    const formChangeHandler = (e) => {
        const { value, id } = e.target;

        setFormState((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    return <><div className='footer-location'>
        <span style={{ textDecoration: 'underline' }}>Send an email</span>
        <form ref={formRef} className='form' onSubmit={submitFormHandler}>
            <div className='form-name'>
                <div className='inputForm'>
                    <label htmlFor='firstName'>First Name</label>
                    <input name='first_name' onChange={formChangeHandler} value={formState.firstName} type='text' id='firstName' />
                </div>
                <div className='inputForm'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input name='last_name' onChange={formChangeHandler} value={formState.lastName} type='text' id='lastName' />
                </div>
            </div>
            <div className='inputForm'>
                <label htmlFor='email' required>Email</label>
                <input name='email' onChange={formChangeHandler} value={formState.email} type='email' id='email' />
            </div>
            {formState.formErrors.email && <FormErrors>{formState.formErrors.email}</FormErrors>}
            <div className='message'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' onChange={formChangeHandler} value={formState.message} rows={8} id='message' style={{ resize: 'none' }} />
            </div>
            {formState.formErrors.message && <FormErrors>{formState.formErrors.message}</FormErrors>}
            <div className='form-action'>
                <ActionButton type='submit' disabled={formState.isLoading}>
                    SEND
                </ActionButton>
            </div>
        </form>
    </div>
        <ToastContainer />
    </>
};

export default Form;
