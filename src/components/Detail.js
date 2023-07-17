import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '48px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one of the best exercises to target your {target}.
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" alignItems="center">
            <Button
              sx={{
                bgcolor: '#FFF2DB',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                p: '0',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img src={item.icon} alt={bodyPart} style={{ width: '40px', height: '40px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '24px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
