import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Avatar_1 from '../assets/images/reviews-avatar-1.png'
import Avatar_2 from '../assets/images/reviews-avatar-2.png'
import Avatar_3 from '../assets/images/reviews-avatar-3.png'
import Avatar_4 from '../assets/images/reviews-avatar-4.png'
import Avatar_5 from '../assets/images/reviews-avatar-5.png'
import { Stack, Typography } from '@mui/material'
import '../App.css'

const Reviews = () => {

  const data = [
    {
      name: 'Rodolfo Goode',
      image: Avatar_1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet, vitae ut ipsum consectetur consectetur amet. Pellentesque cursus arcu, adipiscing vulputate.'

    },
    {
      name: 'Kylee Danford',
      image: Avatar_2,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet, vitae ut ipsum consectetur consectetur amet. Pellentesque cursus arcu, adipiscing vulputate.'

    },
    {
      name: 'Pedro Huard',
      image: Avatar_1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet, vitae ut ipsum consectetur consectetur amet. Pellentesque cursus arcu, adipiscing vulputate.'

    },
    {
      name: 'Brian Young',
      image: Avatar_1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet, vitae ut ipsum consectetur consectetur amet. Pellentesque cursus arcu, adipiscing vulputate.'

    },
    {
      name: 'Paula Kell',
      image: Avatar_1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet, vitae ut ipsum consectetur consectetur amet. Pellentesque cursus arcu, adipiscing vulputate.'

    },
  ]

  const items = data.map((item) => {

    return (
      <Stack direction={'column'} >

        <img
          src={item.image}
          height="80"
          style={{ marginBottom: 10 }}
        ></img>

        <Typography>{item.name}</Typography>
        <Typography>{item.review}</Typography>


      </Stack>

    )

  })

  console.log(items)
  return (
    <div className='carousel'>
      <AliceCarousel
        // autoPlayInterval={1000}
        // infinite
        // mouseTracking
        // animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        // autoPlay
        items={items}>

      </AliceCarousel>
    </div>
  )
}

export default Reviews