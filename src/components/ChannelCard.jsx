import { Box, CardContent, CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

export default function ChannelCard({ channelDetail, marginTop }) {

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%', sm: '358px', md: '320px'},
        height: '326px',
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          {/* Channel logo */}
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: 180,
              width: 180,
              mb: 2,
              border: '1px solid #e3e3e3'
            }}
          />
          {/* Channel title */}
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {/* SubscriberCount */}
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}
