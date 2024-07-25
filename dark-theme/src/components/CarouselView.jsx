import React from 'react';
import { Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { Pagination } from '@mui/lab';
import ferari from '../images/ferari.jpeg';
import mclaren from '../images/mclaren.jpeg';
import merc from '../images/merc1.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carouselItems = [
  {
    label: 'Ferari',
    imgPath: `${ferari}`,
  },
  {
    label: 'Merc',
    imgPath: `${merc}`,
  },
  {
    label: 'Mc Laren',
    imgPath: `${mclaren}`,
  },
];

const CarouselView = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {carouselItems.map((step, index) => (
          <div key={step.label} className="flex justify-center">
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: 'block',
                  maxWidth: 800,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Pagination
        className="flex justify-center my-4"
        count={carouselItems.length}
        page={activeStep + 1}
        onChange={(event, value) => setActiveStep(value - 1)}
        color="primary"
      />
    </div>
  );
};

export default CarouselView;