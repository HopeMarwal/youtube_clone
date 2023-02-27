import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
//UI material
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
//Components
import { Video } from './'
//API
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player';


export default function VideoDetail() {
  const [videoDetail, setVideoDetail] =  useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
  }, [id])

  if(!videoDetail?.snippet) return 'Loading...'

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>

          {/* Video box */}
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              { title }
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              {/* Channel */}
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6'}} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              {/* Statistics */}
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>

        </Box>
      </Stack>
    </Box>
  )
}
