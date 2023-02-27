import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
//components
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  console.log(channelDetail, videos)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight='95vh'>
      {/* Channel logo & title */}
      <Box>
        <div style={{
          zIndex: 10,
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)' 
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      {/* Channel Videos */}
      <Box display="flex" p="2" >
        <Box sx={{ mr: { sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>

    </Box>
  )
}
