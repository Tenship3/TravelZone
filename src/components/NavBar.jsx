'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Tabs, Tab } from '@nextui-org/tabs'
import { Input } from '@nextui-org/input'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import User from './ui/icons/User'
import { EyeFill, EyeSlash } from './ui/icons/Eyes';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const [selectedKey, setSelectedKey] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [auth, setAuth] = useState({
        username: {value: '', isInvalid: false, errorMessage: ''},
        email: {value: '', isInvalid: false, errorMessage: ''},
        password: {value: '', isInvalid: false, errorMessage: ''},
        confirmPassword: {value: '', isInvalid: false, errorMessage: ''}
    })

    useEffect(() => {
        setAuth({
            username: {value: '', isInvalid: false, errorMessage: ''},
            email: {value: '', isInvalid: false, errorMessage: ''},
            password: {value: '', isInvalid: false, errorMessage: ''},
            confirmPassword: {value: '', isInvalid: false, errorMessage: ''}
        })
    }, [isOpen])

    useEffect(() => {
        setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === null ? false : JSON.parse(sessionStorage.getItem('isLoggedIn')))
    }, [])

    const handleLogin = () => {
        setLoading(true)
        setErrorMessage('')
        axios.post('/api/auth/login', {
            email: auth.email.value,
            password: auth.password.value
        })
        .then(response => {
            sessionStorage.setItem('isLoggedIn', response.data)
            onOpenChange()
            window.location.reload()
        })
        .catch(err => {
            if(!err.response.data) return setErrorMessage(err.response.statusText)

            if(err.response.data.errors) return setAuth({
                ...auth,
                email: {...auth.email, isInvalid: err.response.data.errors.email !== '' ? true : false, errorMessage: err.response.data.errors.email},
                password: {...auth.password, isInvalid: err.response.data.errors.password !== '' ? true : false, errorMessage: err.response.data.errors.password}
            })

            setErrorMessage(err.response.data)
        })
        .finally(() => setLoading(false))
    }

    const handleRegister = () => {
        setLoading(true)
        setErrorMessage('')
        axios.post('/api/auth/register', {
            username: auth.username.value,
            email: auth.email.value,
            password: auth.password.value,
            confirmPassword: auth.confirmPassword.value
        })
        .then(() => window.location.reload())
        .catch(err => {
            if(!err.response.data) return setErrorMessage(err.response.statusText)

            if(err.response.data.errors) return setAuth({
                ...auth,
                username: {...auth.username, isInvalid: err.response.data.errors.username !== '' ? true : false, errorMessage: err.response.data.errors.username},
                email: {...auth.email, isInvalid: err.response.data.errors.email !== '' ? true : false, errorMessage: err.response.data.errors.email},
                password: {...auth.password, isInvalid: err.response.data.errors.password !== '' ? true : false, errorMessage: err.response.data.errors.password},
                confirmPassword: {...auth.confirmPassword, isInvalid: err.response.data.errors.confirmPassword !== '' ? true : false, errorMessage: err.response.data.errors.confirmPassword}
            })

            setErrorMessage(err.response.data)
        })
        .finally(() => setLoading(false))
    }

    const handleLogout = () => {
        setLoading(true)
        axios.post('/api/auth/logout')
        .then(response => {
            sessionStorage.clear()
            setIsLoggedIn(false)
            window.location.reload()
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='fixed bg-transparent bg-gradient-to-b from-black to-transparent'>
        <NavbarContent justify='start'>
            <NavbarMenuToggle className='md:hidden text-white'/>
            <NavbarBrand>
                <strong className='text-white border-y-2 border-white font-extrabold text-xl'>
                    TRAVEL
                    <span className='text-teal-400'>ZONE</span>
                </strong>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify='center' className='hidden md:flex'>
            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className='bg-transparent text-white text-lg'>Places</Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onClick={() => router.push('/places/cancun')}>
                            Cancun
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/places/tulum')}>
                            Tulum
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/places/playa-del-carmen')}>
                            Playa del Carmen
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/places/merida')}>
                            Merida
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className='bg-transparent text-white text-lg'>Hotels</Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onClick={() => router.push('/hotels/xcaret')}>
                            Xcaret
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/hotels/rosewood-mayakoba')}>
                            Rosewood Mayakoba
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/hotels/banyan-tree-mayakoba')}>
                            Banyan Tree Mayakoba
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className='bg-transparent text-white text-lg'>Beaches</Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onClick={() => router.push('/beaches/paradise-beach')}>
                            Paradise Beach
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/beaches/zipolite-beach')}>
                            Zipolite Beach
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/beaches/huatulco-bays')}>
                            Huatulco Bays
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify='end'>
            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className='text-md border-white flex items-center gap-3 bg-transparent'>
                            <span className='text-white'>{isLoggedIn !== false && isLoggedIn.username}</span>
                            <div className='p-2 rounded-[100%] border border-white'>
                                <User fill="white" />
                            </div>
                        </Button>
                    </DropdownTrigger>
                        {
                            !isLoggedIn ? (
                                <DropdownMenu>
                                    <DropdownItem onPress={() => {
                                        setSelectedKey('Log In')
                                        onOpen()
                                    }}>Log In</DropdownItem>
                                    <DropdownItem onPress={() => {
                                        setSelectedKey('Register')
                                        onOpen()
                                    }}>Register</DropdownItem>
                                </DropdownMenu>
                            ) : (
                                <DropdownMenu>
                                    <DropdownItem onPress={handleLogout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            )
                        }
                </Dropdown>
            </NavbarItem>
        </NavbarContent>

        <NavbarMenu className='bg-black bg-opacity-70'>
            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className='bg-transparent text-white text-lg'>Places</Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onClick={() => router.push('/places/cancun')}>
                            Cancun
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/places/tulum')}>
                            Tulum
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/places/playa-del-carmen')}>
                            Playa del Carmen
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/places/merida')}>
                            Merida
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className='bg-transparent text-white text-lg'>Hotels</Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onClick={() => router.push('/hotels/xcaret')}>
                            Xcaret
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/hotels/rosewood-mayakoba')}>
                            Rosewood Mayakoba
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/hotels/banyan-tree-mayakoba')}>
                            Banyan Tree Mayakoba
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className='bg-transparent text-white text-lg'>Beaches</Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem onClick={() => router.push('/beaches/paradise-beach')}>
                            Paradise Beach
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/beaches/zipolite-beach')}>
                            Zipolite Beach
                        </DropdownItem>
                        <DropdownItem onClick={() => router.push('/beaches/huatulco-bays')}>
                            Huatulco Bays
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
        </NavbarMenu>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex justify-center text-3xl font-bold'>
                            Authentication
                        </ModalHeader>
                        <ModalBody className='flex items-center'>
                            <Tabs defaultSelectedKey={selectedKey}>
                                <Tab key="Log In" title="Log In" className='w-full flex flex-col gap-5'>
                                    <form onSubmit={e => e.preventDefault()} className='w-full flex flex-col gap-5'>
                                        <div className='flex flex-col gap-3 my-0 mx-auto w-70%]'>
                                            <Input
                                                type='email'
                                                label="Email"
                                                size='sm'
                                                variant='underlined'
                                                name='email'
                                                value={auth.email.value}
                                                onChange={e => setAuth({...auth, email: {...auth.email, value: e.target.value, isInvalid: false, errorMessage: ''}})}
                                                isRequired
                                                isInvalid={auth.email.isInvalid}
                                                errorMessage={auth.email.errorMessage}
                                            />
                                            <Input
                                                type={isVisible ? "text" : "password"}
                                                label="Password"
                                                size='sm'
                                                variant='underlined'
                                                name="password"
                                                isRequired
                                                value={auth.password.value}
                                                onChange={e => setAuth({...auth, password: {...auth.password, value: e.target.value, isInvalid: false, errorMessage: ''}})}
                                                isInvalid={auth.password.isInvalid}
                                                errorMessage={auth.password.errorMessage}
                                                endContent={
                                                    <Button variant='light' size='sm' isIconOnly onClick={() => setIsVisible(!isVisible)}>
                                                        {isVisible ? <EyeFill fill="black" /> : <EyeSlash fill="black" />}
                                                    </Button>
                                                }
                                            />
                                            <Link onClick={onOpenChange} href='/reset-password' className='text-tiny text-blue-500 hover:underline'>Forgot your password?</Link>
                                        </div>
                                        {
                                            errorMessage !== '' && (
                                                <div className='p-2 rounded-xl border border-red-600 w-full flex items-center gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                                                    </svg>
                                                    <span className='text-red-600'>{errorMessage}</span>
                                                </div>
                                            )
                                        }
                                    </form>
                                </Tab>
                                <Tab key="Register" title="Register" className='w-full flex flex-gap-5'>
                                    <form onSubmit={e => e.preventDefault()} className='w-full flex flex-col gap-5'>
                                        <div className='flex flex-col gap-3 my-0 mx-auto w-70%]'>
                                            <Input
                                                type='username'
                                                label="Username"
                                                size='sm'
                                                variant='underlined'
                                                name='username'
                                                value={auth.username.value}
                                                onChange={e => setAuth({...auth, username: {...auth.username, value: e.target.value, isInvalid: false, errorMessage: ''}})}
                                                isInvalid={auth.username.isInvalid}
                                                errorMessage={auth.username.errorMessage}
                                                isRequired
                                            />
                                            <Input
                                                type='email'
                                                label="Email"
                                                size='sm'
                                                variant='underlined'
                                                name='email'
                                                isRequired
                                                value={auth.email.value}
                                                onChange={e => setAuth({...auth, email: {...auth.email, value: e.target.value, isInvalid: false, errorMessage: ''}})}
                                                isInvalid={auth.email.isInvalid}
                                                errorMessage={auth.email.errorMessage}
                                            />
                                            <Input
                                                type={isVisible ? "text" : "password"}
                                                label="Password"
                                                size='sm'
                                                variant='underlined'
                                                name="password"
                                                isRequired
                                                value={auth.password.value}
                                                onChange={e => setAuth({...auth, password: {...auth.password, value: e.target.value, isInvalid: false, errorMessage: ''}})}
                                                isInvalid={auth.password.isInvalid}
                                                errorMessage={auth.password.errorMessage}
                                                endContent={
                                                    <Button variant='light' size='sm' isIconOnly onClick={() => setIsVisible(!isVisible)}>
                                                        {isVisible ? <EyeFill fill="black" /> : <EyeSlash fill="black" />}
                                                    </Button>
                                                }
                                            />
                                            <Input
                                                type={isVisibleConfirmPassword ? "text" : "password"}
                                                label="Confirm Password"
                                                size='sm'
                                                variant='underlined'
                                                name="confirmPassword"
                                                isRequired
                                                value={auth.confirmPassword.value}
                                                onChange={e => setAuth({...auth, confirmPassword: {...auth.confirmPassword, value: e.target.value, isInvalid: false, errorMessage: ''}})}
                                                isInvalid={auth.confirmPassword.isInvalid}
                                                errorMessage={auth.confirmPassword.errorMessage}
                                                endContent={
                                                    <Button variant='light' size='sm' isIconOnly onClick={() => setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}>
                                                        {isVisibleConfirmPassword ? <EyeFill fill="black" /> : <EyeSlash fill="black" />}
                                                    </Button>
                                                }
                                            />
                                        </div>
                                        {
                                            errorMessage !== '' && (
                                                <div className='p-2 rounded-xl border border-red-600 w-full flex items-center gap-3'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                                                    </svg>
                                                    <span className='text-red-600'>{errorMessage}</span>
                                                </div>
                                            )
                                        }
                                    </form>
                                </Tab>
                            </Tabs>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant='light' color='danger' onPress={onClose}>Close</Button>
                            <Button onClick={() => selectedKey === 'Log In' ? handleLogin() : handleRegister()} isLoading={loading} className='text-white bg-gradient-to-tr from-sky-300 to-blue-500'>Submit</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </Navbar>
  )
}

export default NavBar