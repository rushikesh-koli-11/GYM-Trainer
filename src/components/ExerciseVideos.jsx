import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import { FaYoutube } from "react-icons/fa";


const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '50px' }, padding: { xs: '0' } }} >
      <Typography sx={{ fontSize: { lg: '35px', xs: '25px' }}} fontWeight={700} color="#fff" mb="33px" >
        <FaYoutube className='RIcons' /> Watch <span style={{ color: '#fff783', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '30px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderRadius: '10px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} fontWeight={600} color="#fff">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#fff">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;