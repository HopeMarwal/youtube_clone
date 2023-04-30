import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
//UI material
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
//Components
import { Videos } from './'
//API
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player';


export default function VideoDetail() {
  const [videos, setVideos] = useState([])
  const [videoDetail, setVideoDetail] =  useState(null)
  const { id } = useParams();

  useEffect(() => {
    //Video detail
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
    //Related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id])

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [id])

  if(!videoDetail?.snippet) return 'Loading...'

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        {/* Video box */}
        <Box flex={1}>
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
                <Typography variant='h6' color="#fff">
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

        {/* Side videos */}
        <Box 
          px={2} 
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
          sx={{
            width: { md: '30%'}
          }}
        >
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}
