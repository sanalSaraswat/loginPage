import React from 'react'
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const NavBar = ({ signOut, setOpenModal }) => {

    const navigate = useNavigate()
    return (

        < AppBar position='fixed' sx={{ backgroundColor: '#02de8d' }} >

            <Toolbar
                sx={{ margin: "0 150px" }}>

                <Typography
                    variant='h6'
                    onClick={() => { navigate("/", { replace: true }) }}
                    sx={{
                        fontWeight: 700,
                        color: 'white',
                        flex: 1,
                        cursor: 'pointer',
                    }}
                >Handling Expired Medicines</Typography>


                <Stack direction={'row'} gap={'20px'}>

                    <Typography
                        onClick={() => setOpenModal(true)}
                        sx={{
                            fontWeight: 700,
                            color: 'white',
                            cursor: 'pointer',
                        }}

                    >
                        Upload Medicines
                    </Typography>

                    <Typography
                        sx={{
                            fontWeight: 700,
                            color: 'white',
                            cursor: 'pointer',
                        }}

                    >
                        About
                    </Typography>

                    <Typography
                        onClick={() => signOut()}
                        sx={{
                            fontWeight: 700,
                            color: 'white',
                            cursor: 'pointer',
                        }}



                    >
                        Logout
                    </Typography>

                </Stack>



            </Toolbar>

        </AppBar >




    )
}

export default NavBar