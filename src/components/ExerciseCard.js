import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
        onClick={() => {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1000); 
        }}
        to={`/exercise/${exercise.id}`}
        className='exercise-card'
    >
        <img 
            src={exercise.gifUrl}
            alt={exercise.name}
            loading='lazy'
        />
        <Stack
            direction='row'
        >
            <Button
                sx={{
                    ml: '21px',
                    color: '#fff',
                    background: '#ffa9a9',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize'
                }}
                className='button-exercise-card'
            >
                {exercise.bodyPart}
            </Button>

            <Button
                sx={{
                    ml: '21px',
                    color: '#fff',
                    background: '#fcc757',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize'
                }}
                className='button-exercise-card-2'
            >
                {exercise.target}
            </Button>
        </Stack>

        <Typography
            ml="25px"
            color='#000'
            fontWeight='bold'
            mt='11px'
            pb='10px'
            textTransform='capitalize'
            fontSize='20px'
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard