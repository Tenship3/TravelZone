'use client'

import React, { useEffect, useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import axios from 'axios'
import { EyeFill, EyeSlash } from '@/components/ui/icons/Eyes'
import { useRouter } from 'next/navigation'

function ResetPassword() {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [loading, setLoading] = useState(false)
    const [codeSuccess, setCodeSuccess] = useState(false)
    const [isVisiblePassword, setIsVisiblePassword] = useState(true)
    const [newPassword, setNewPassword] = useState({
        password: {value: '', isInvalid: false, errorMessage: ''},
        code: {value: '', isInvalid: false, errorMessage: ''}
    })
    const router = useRouter()

    useEffect(() => {
        sessionStorage.removeItem('code')
    }, [])

    const handleSendMail = (e) => {
        e.preventDefault()

        setLoading(true)
        axios.post('/api/reset-password', {email})
        .then(response => {
            sessionStorage.setItem('code', response.data)
            setCodeSuccess(true)
        })
        .catch(err => {
            if(err.response.data !== '') return setEmailError(err.response.data)

            console.log(err)
        })
        .finally(() => setLoading(false))
    }

    const handleChangePassword = (e) => {
        e.preventDefault()

        if(!newPassword.password.value || !newPassword.code.value) return setNewPassword({
            ...newPassword,
            password: {...newPassword.password, isInvalid: !newPassword.password.value ? true : false, errorMessage: !newPassword.password.value ? 'Required' : ''},
            code: {...newPassword.code, isInvalid: !newPassword.code.value ? true : false, errorMessage: !newPassword.code.value ? 'Required' : ''}
        })

        if(sessionStorage.getItem('code') != newPassword.code.value) return setNewPassword({
            ...newPassword,
            code: {...newPassword.code, isInvalid: true, errorMessage: 'Invalid code'}
        })

        setLoading(true)

        axios.patch('/api/reset-password', {
            email,
            password: newPassword.password.value
        })
        .then(() => {
            alert('perfect')
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

  return (
    <div className='flex justify-center items-center h-[90vh]'>
        <section className='flex flex-col gap-3'>
            <h1 className='text-4xl font-extrabold'>Reset password</h1>

            <form onSubmit={handleSendMail} className='flex flex-col gap-3'>
                <Input
                    type='email'
                    placeholder='Enter your email'
                    variant='bordered'
                    isRequired
                    value={email}
                    onChange={e => {
                        setEmailError('')
                        setEmail(e.target.value)
                    }}
                    isInvalid={emailError !== '' ? true : false}
                    errorMessage={emailError}
                />
                <Button
                    type='submit'
                    variant='shadow'
                    color='primary'
                    size='sm'
                    isLoading={loading}
                >Send</Button>
            </form>

            {
                codeSuccess && (
                    <form onSubmit={handleChangePassword} className='flex flex-col gap-3 mt-20'>
                        <Input
                            type={isVisiblePassword ? 'text' : 'password'}
                            placeholder='New password'
                            variant='bordered'
                            value={newPassword.password.value}
                            isInvalid={newPassword.password.isInvalid}
                            errorMessage={newPassword.password.errorMessage}
                            onChange={e => setNewPassword({...newPassword, password: {value: e.target.value, isInvalid: false, errorMessage: ''}})}
                            endContent={
                                <Button variant='light' size='sm' isIconOnly onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
                                    {isVisiblePassword ? <EyeFill fill="black" /> : <EyeSlash fill="black" />}
                                </Button>
                            }
                        />
                        <Input
                            type="number"
                            placeholder='Enter the code'
                            variant='bordered'
                            value={newPassword.code.value}
                            isInvalid={newPassword.code.isInvalid}
                            errorMessage={newPassword.code.errorMessage}
                            onChange={e => setNewPassword({...newPassword, code: {value: e.target.value, isInvalid: false, errorMessage: ''}})}
                        />
                        <span className='text-tiny text-slate-500'>You can resend a new code</span>
                        <Button
                            type='submit'
                            color='success'
                            size='sm'
                            isLoading={loading}
                        >
                            Change password
                        </Button>
                    </form>
                )
            }
        </section>
    </div>
  )
}

export default ResetPassword