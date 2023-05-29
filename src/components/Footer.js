import { Box, Container, Icon, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MedicationIcon from '@mui/icons-material/Medication';
import LocationIcon from '../assets/icons/icon-map.svg'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../App.css'
import { Height } from '@mui/icons-material';





const Footer = () => {
    return (

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '450px'
        }} >

            <Stack
                direction={'row'}
                gap={'10%'}
            >

                <Stack >
                    <Link sx={{
                        textDecoration: 'none',
                        color: 'black'
                    }} pb={'2rem'} variant='h4' fontWeight={700}>  <Icon fontSize='large'> <MedicationIcon fontSize='large' sx={{ color: '#02de8d' }}></MedicationIcon> </Icon>Handling Expired Medicines</Link>
                    <Typography >Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting industry. </Typography>

                    <Stack
                        mt={'1.5rem'}
                        direction={'row'}
                        gap={'10px'}
                    >

                        <Link target='-blank' rel='noopener' href='https://www.facebook.com/' sx={{ color: 'black' }} ><FacebookIcon fontSize='large' /></Link>
                        <Link target='-blank' rel='noopener' href='https://www.instagram.com' sx={{ color: '#02de8d' }} ><LinkedInIcon fontSize='large' /></Link>
                        <Link target='-blank' rel='noopener' href='https://www.google.com/' sx={{ color: 'black' }} ><GoogleIcon fontSize='large' /></Link>
                        <Link target='-blank' rel='noopener' href='https://www.twitter.com/' sx={{ color: '#02de8d' }} ><TwitterIcon fontSize='large' /></Link>

                    </Stack>



                </Stack>

                <Stack gap={'1.5rem'}>

                    <Typography sx={{
                        fontWeight: '700',
                    }}
                        variant='h5'
                    >
                        Quick Links
                    </Typography>
                    <Link sx={{
                        textDecoration: 'none',
                        color: 'black'
                    }} >Home</Link>
                    <Typography>About Us</Typography>
                    <Typography>Quick Links</Typography>

                </Stack>

                <Stack gap={'1.5rem'} >
                    <Typography sx={{
                        fontWeight: '700',
                    }}
                        variant='h5'
                    >
                        Quick Links
                    </Typography>

                    <Typography>Home</Typography>
                    <Typography>About Us</Typography>
                    <Typography>Quick Links</Typography>
                </Stack>

                <Stack gap={'1.5rem'} >

                    <Typography sx={{
                        fontWeight: '700',
                    }}
                        variant='h5'
                    >
                        Contact Us
                    </Typography>

                    <Link href='https://www.google.com/maps/place/Silvassa,+Dadra+and+Nagar+Haveli+and+Daman+and+Diu/@20.2665654,72.9846451,14z/data=!3m1!4b1!4m6!3m5!1s0x3be0cb5edb1ce063:0x65fe78dc1cdaeb1f!8m2!3d20.2753406!4d73.0072986!16zL20vMDR6OTU1'
                        target='_blank'
                        rel='noopener'
                        sx={{
                            textDecoration: 'none',
                            color: 'black',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        <Icon> <LocationOnIcon fontSize='small' sx={{ color: 'black' }} /> </Icon>
                        Silvassa

                    </Link>


                    <Link sx={{
                        textDecoration: 'none',
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                    >
                        <Icon> <CallIcon fontSize='small' sx={{ color: 'black' }} /> </Icon>
                        111-222-333

                    </Link>

                    <Link sx={{
                        textDecoration: 'none',
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                    >
                        <Icon> <EmailIcon fontSize='small' sx={{ color: 'black' }} /> </Icon>
                        contact@example.com

                    </Link>

                </Stack>

            </Stack>


        </Box>


    )
}

export default Footer