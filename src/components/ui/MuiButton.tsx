import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MuiButtons() {
  return (
    <Stack spacing={2} direction="row" border={0} borderColor="gray" padding={2} borderRadius={5}>
      <Button variant="text">Text</Button>
      <Button variant="contained" size='small' style={{ borderRadius: "1rem", fontSize: "0.5rem"}}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}