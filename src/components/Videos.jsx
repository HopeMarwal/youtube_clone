import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

export default function Videos({ videos, direction }) {
  if(!videos?.length) { return 'Loading...'}
  return (
    <Stack
      flexWrap='wrap'
      justifyContent='space-between'
      sx={{
        flexDirection: {xs: 'row', md: direction || 'row'}
      }}
    >
      {
        videos.map((item, index) => (
          <Box 
            key={index}
            sx={{
              width: direction == 'column' ? {  xs: '100%', sm: '49%', md: '100%'} : {  xs: '100%', sm: '49%', lg: '32%'},
              marginBottom: '16px'
            }}
          >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
      }
    </Stack>
  )
}
