import { Box, Button, Typography } from '@material-ui/core'
import TextField from '@mui/material/TextField'
import { IconButton, InputAdornment, Stack } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [signIn, setSignIn] = useState(false)
    const navigate = useNavigate()


    function handleClickShowPassword() {
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }

    function handleClick() {
        { signIn ? setSignIn(false) : setSignIn(true) }
    }

    function signUp() {
        console.log('email', email)
        console.log('password', password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials)
                navigate('./dashboard')

            })
            .catch((error) => {

                console.log(error)
            })
    }

    function logIn() {
        console.log('email', email)
        console.log('password', password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                navigate('./dashboard')
                console.log(userCredentials)
            })
            .catch((error) => {

                console.log(error)

            })
    }

    return (

        <Box className='App'>

            <Stack direction={'row'} sx={{ width: '1000px', height: '700px' }}>


                <Stack
                    className={signIn ? 'login' : 'login2'}
                    width={'400px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{ backgroundColor: '#02de8d' }}
                >

                    <Typography variant='h4' style={{
                        fontWeight: 700,
                        color: "white",

                    }} >{signIn ? 'Welcome' : 'Welcome Back!'}</Typography>

                    <Typography variant='h6' style={{
                        color: 'white',
                        padding: '20px 40px'
                    }}>

                        {signIn ? `Wish to connect with us please share your personal info`
                            : `To keep connected with us please login with your personal info`
                        }

                    </Typography>

                    <Button style={{
                        width: '180px',
                        border: 'white 4px solid',
                        color: 'white',
                        borderRadius: '30px',
                    }}
                        onClick={handleClick}
                    >
                        {signIn ? 'SignUp' : 'LogIn'}
                    </Button>


                </Stack>

                <Stack
                    className={signIn ? 'signup' : 'login2'}
                    position={'relative'}
                    width={'600px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >

                    <Typography style={{
                        color: '#02de8d',
                        fontWeight: '700',
                        marginBottom: '2.5%'

                    }} variant='h4'>{signIn ? 'Use Account' : 'Create Account'}</Typography>

                    {!signIn && (<TextField
                        className='textfield'
                        id="outlined-textarea"
                        sx={{ width: '70%', p: '10px 0' }}
                        label="Name"
                        onChange={e => setName(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />)
                    }

                    <TextField
                        className='textfield'
                        id="outlined-textarea"
                        label="Email"
                        sx={{ width: '50%', p: '10px 0' }}
                        onChange={(e) => { setEmail(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className='textfield'
                        id="outlined-textarea"
                        sx={{ width: '70%', p: '10px 0' }}
                        onChange={(e) => { setPassword(e.target.value) }}
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}

                    />

                    <Button variant='contained'
                        onClick={signIn ? logIn : signUp}
                        style={{ backgroundColor: '#02de8d' }}
                    >
                        {signIn ? 'Login' : 'SignUp'}
                    </Button>



                </Stack>

            </Stack>


        </Box>

    )
}

export default Register