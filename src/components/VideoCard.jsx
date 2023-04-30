import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl } from '../utils/constants';
import { mS } from '../utils/constants'

export default function VideoCard({ video: {id : { videoId }, snippet } }) {
  const date = new Date(snippet?.publishedAt)
  const displayD = `${date.getDate()} ${mS[date.getMonth()]} ${date.getFullYear()}`
  return (
    <Card
      sx={{
        width: '100%',
        boxShadow: 'none',
        borderRadius: 0
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={ snippet.thumbnails.high ? snippet?.thumbnails?.high?.url : demoThumbnailUrl }
          alt={snippet?.title}
          sx={{ width: '100%', height: {xs: 220, sm: 180}}}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#1e1e1e', height: '106px' }}
      >
        {/* Link to Video */}
        <Link to={`/video/${videoId}`}>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            color="#fff"
          >
            { snippet?.title.slice(0, 60) }
          </Typography>
        </Link>

        <Typography variant='subtitle2' color='#ccc' fontSize='10px'>
          {displayD}
        </Typography>

        {/* Link to channel */}
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography
            variant='subtitle2'
            fontWeight='bold'
            color="gray"
          >
            { snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>

      </CardContent>
    </Card>
  )
}
