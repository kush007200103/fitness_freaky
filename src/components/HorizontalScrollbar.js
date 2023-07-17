import React, { useContext, useRef } from 'react';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = ({ scroll }) => (
  <Typography onClick={scroll} className="arrow">
    <img src={LeftArrowIcon} alt="left-arrow" />
  </Typography>
);

const RightArrow = ({ scroll }) => (
  <Typography onClick={scroll} className="arrow">
    <img src={RightArrowIcon} alt="right-arrow" />
  </Typography>
);

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    const container = scrollContainerRef.current;
    container.scrollLeft += scrollOffset * container.offsetWidth;
  };

  const handleLeftArrowClick = () => {
    scroll(-1);
  };

  const handleRightArrowClick = () => {
    scroll(1);
  };

  return (
    <Box sx={{ overflowX: 'auto', display: 'flex', alignItems: 'center' }} ref={scrollContainerRef}>
      <LeftArrow scroll={handleLeftArrowClick} />
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
        </Box>
      ))}
      <RightArrow scroll={handleRightArrowClick} />
    </Box>
  );
};

export default HorizontalScrollbar;
