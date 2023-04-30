import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
//Components
import { Navbar, VideoDetail, ChannelDetail, SearchFeed, Feed } from './components';

const App = () => (
  <div>
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000', padding: {xs: '0 16px', md: '0 0 0 16px'} }} >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </div>
)

export default App