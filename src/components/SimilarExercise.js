import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  if(!targetMuscleExercises.length){
    return (
      <Loader />
    );
  }

  //console.log("HI UNDER IS THE MUSCLE!");
  //console.log(targetMuscleExercises.slice(0,5));

  return (
    <Box
      sx={{
        marginTop: {
          lg: '80px',
          xs: '0px'
        }
      }}
      p='20px'
    >
      <Typography
        variant='h3'
        mb='35px'
      >
        Similar  <span style={{color: '#ff2526'}}>exercises</span> that target the same muscle group
      </Typography>
      <Stack
        direction='row'
        sx={{
            p: '2',
            position: 'relative'
        }}
        mb='100px'
      >
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises.slice(0,10)}/> : <Loader />}
      </Stack>

      <Typography
        variant='h3'
        mb='35px'
      >
        Similar  <span style={{color: '#ff2526'}}>equipment</span> that target the same muscle group
      </Typography>
      <Stack
        direction='row'
        sx={{
            p: '2',
            position: 'relative'
        }}
      >
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises.slice(0,10)}/> : <Loader />}
      </Stack>
    </Box>
  );
}

export default SimilarExercise;