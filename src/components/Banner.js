import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import BannerImage from '../assets/images/Banner.jpg'
import '../App.css'

const Banner = () => {
  return (
    <Box sx={{
      mt: { lg: '100px', xs: '70px' },
      ml: { sm: '50px' },
    }} p='20px'>
      <Typography color='#02de8d' fontWeight='600' fontSize='26px'>
        Medication Club
      </Typography>

      <Typography m='30px 0 23px' fontWeight='700' sx={{
        fontSize: { lg: '44px', xs: '40px' }
      }}>
        Upload, Wait <br /> and Smile
      </Typography>

      <Typography fontSize='22px' lineHeight='35px' mb={2}>
        Check out all the Medicines
      </Typography>

      <Button sx={{backgroundColor: '#02de8d', padding: '10px'}} href='#search' color='success' variant='contained' >Explore Medicines</Button>

      <Typography 
      fontWeight={600}
      color='#02de8d'
      fontSize='200px'
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}

      }}>
        Medicines
      </Typography>


      <img className='banner-img' src={BannerImage} alt='banner' />

    </Box>
  )
}

export default Banner