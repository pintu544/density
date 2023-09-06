import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Select campaign settings',
    description: '.',
    labelColor: 'blue', // Text color for the upper label
  },
  {
    label: 'Create an ad group',
    description: '.',
    labelColor: 'green', // Text color for the lower label
  },
  {
    label: 'Create an ad',
    description: '.',
    labelColor: 'red', // Text color for the upper label
  },
];

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Typography
        variant="h6"
        color={steps[activeStep]?.labelColor} // Use optional chaining to prevent errors
        sx={{ textAlign: 'center' }}
      >
        {steps[activeStep]?.label}
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography
        variant="h6"
        color={steps[activeStep]?.labelColor} // Use optional chaining to prevent errors
        sx={{ textAlign: 'center' }}
      >
        {steps[activeStep]?.label}
      </Typography>
      <div>
        {activeStep < steps.length ? (
          <div>
            <Typography>{steps[activeStep]?.description}</Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 2, mr: 2 }}
            >
              Next
            </Button>
            {activeStep > 0 && (
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ mt: 2 }}
              >
                Back
              </Button>
            )}
          </div>
        ) : (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography variant="h5">All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 2 }}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </Box>
  );
}
