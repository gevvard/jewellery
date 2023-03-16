import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider({rangeValues, setRangeValues}) {

  const handleChange = (event, newValue) => {
    setRangeValues(newValue)
  };

return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={rangeValues}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={5000}
      />
    </Box>
  );
}
