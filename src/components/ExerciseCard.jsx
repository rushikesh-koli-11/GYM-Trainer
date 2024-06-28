import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link overflow='hidden' className="exercise-card" to={`/exercise/${exercise.id}`}>
    <Stack sx={{ overflow:'hidden', borderRadius: '10px', width: {lg:'350px', sx: '200px'}, height: {lg:'350px', sx: '200px'}, cursor: 'pointer', gap: '47px' }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"  />
    </Stack>
    <Stack sx={{mt:'10px'}} direction="row" color="white">
      <Button sx={{ ml: '21px', color: '#fff', background: '#ec9c23', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#8a3700', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="white" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>

 
    
);

export default ExerciseCard;