import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({name, exerciseVideos}) => {
  console.log(exerciseVideos);

  if(!exerciseVideos.length){ 
    return (
      <Loader />
    );
  }
  

  return (
    <Box
      sx={{
        marginTop:{
          lg: '200px',
          xs: '20px'
        }
      }}
      p='20px'
    >
      <Typography
        variant='h3'
        mb='35px'
      >
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos 
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: {
            lg:'row'
          },
          gap:{
            lg: '110px',
            xs: '0px'
          }
        }}
      >
        {exerciseVideos?.slice(0,3).map((item,index) => {
          return (
            <a
              key={index}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='norefferer'
            >
              <img 
                src={item.video.thumbnails[0].url}
                alt={item.video.title} 
              />
              <Box>
                <Typography
                  variant='h5'
                  color='#000'
                >
                  <span style={{textTransform: 'capitalize'}}>{item.video.title}</span>
                </Typography>
                <Typography
                  
                  color='#000'
                  mt='10px'
                >
                  <span style={{textTransform: 'capitalize'}}>{item.video.channelName}</span>
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos