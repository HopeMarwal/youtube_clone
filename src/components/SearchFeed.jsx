//React
import { useState, useEffect } from 'react';
//UI material
import { Box, Typography } from '@mui/material'
//Router
import { useParams } from 'react-router-dom'
//Components
import { Videos } from './'
//API
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function SearchFeed() {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [searchTerm])

  return (
    <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>

      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white'}}>

        Search results for: <span style={{ color: '#f31503' }}>{searchTerm}</span> videos

      </Typography>

      {/* Videos */}
      <Videos videos={videos} />
    </Box>
  )
}
