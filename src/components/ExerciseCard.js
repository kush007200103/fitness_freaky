import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row" justifyContent="flex-start" gap={1} mt={1}>
      <Button
        variant="contained"
        sx={{
          color: '#fff',
          backgroundColor: '#FFA9A9',
          fontSize: '12px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          height: '24px',
          py: '0',
          px: '10px',
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        variant="contained"
        sx={{
          color: '#fff',
          backgroundColor: '#FCC757',
          fontSize: '12px',
          borderRadius: '20px',
          textTransform: 'capitalize',
          height: '24px',
          py: '0',
          px: '10px',
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '20px', xs: '16px' }, mt: '8px', pb: '10px', textTransform: 'capitalize' }}
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
