import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material'
import { Videos, Sidebar } from './'
//API
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [selectedCategory])

  return (
    <Stack
      sx={{ flexDirection: {xs: 'column', md: 'row'} }}
    >
      {/* Sidebar box */}
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2}
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 Youtube Clone
        </Typography>
      </Box>
      {/* Main box */}
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white'}}
        >
          {selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
        </Typography>

        {/* Videos */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
