import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../App.css'

const SearchMedicines = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('')
    const searchUrl = `https://www.google.com/search?q=${search}`;

    function handleSearch() {

        window.open(searchUrl, '_blank')
    }
    


    return (
        <Stack alignItems='center' mt='37px'>

            <Box mb='72px'>
                <TextField
                    sx={{
                        input: { fontWeight: '700' },
                        width: { lg: '1170px', xs: '350px' },
                        backgroundColor: '#fff',
                    }}
                    id='search'
                    height='72px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Medicines'
                    type='text'
                />

                <Button variant='contained' color='success' 
                    sx={{
                        bgcolor: '#02de8d',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px'
                    }}
                    
                    onClick={handleSearch}
                >
                    Search
                </Button>

            </Box>

            {/* <Box sx={{ width: '100%', padding: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box> */}

        </Stack>
    )




}

export default SearchMedicines