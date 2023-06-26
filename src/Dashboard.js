import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { auth } from './firebase.js'
import { storage } from './firebase.js'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Banner from './components/Banner'
import SearchMedicines from './components/SearchMedicines'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import { ref, uploadBytes } from 'firebase/storage'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'

const Dashboard = () => {

  const [currentUser, setCurrentUser] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [image, setImage] = useState(null)
  const navigate = useNavigate()

  function handleImageChange(e) {
    { e.target.files[0] && setImage(e.target.files[0]) }
  }

  function uploadImage() {

    if (image) {

      const imageRef = ref(storage, `images/${image.name}`)
      uploadBytes(imageRef, image)
        .then(() => {
          alert('Image Uploaded')
          setOpenModal(false)
        })

        .catch((e) => {
          alert(console.error)
        })

    }


  }

  console.log(openModal)

  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : setCurrentUser(null)
    })

    console.log(currentUser)

  }, [])

  function logOut() {

    console.log('hello')

    signOut(auth).then(() => {
      console.log('Logout Successful')
    }).catch((err) => {
      console.log(err)
    });

    navigate('/')

  }


  return (
    <div>
      <NavBar signOut={logOut} setOpenModal={setOpenModal} />
      <Banner />
      <SearchMedicines />
      {/* <Reviews /> */}

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: '20px',
            backgroundColor: '#02de8d',
            boxShadow: 24,
            p: 4,
          }}
        >

          <TextField
            style={{
            }}
            onChange={e => handleImageChange(e)}
            id="outlined-textarea"
            type='file'
            sx={{ width: '50%', p: '10px 0' }}

          />

          <Button
            style={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600'
            }}
            onClick={uploadImage}
          >
            Upload
          </Button>

        </Box>

      </Modal>

      <Footer />
    </div>
  )
}

export default Dashboard