import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';




export  function MachineQuality() {

  const fieldNames = [
"Machine Type - CNC/VMC/HMC Please Specify *",
"Machining cost (Rs/Pc) *",
"Machining Fixture cost (One time Inv) *",
"Inspection Gauges Cost *",
"Leak testing fixture cost *",
"Washing fixture cost *",
"Plastic Protection Cap Costs (Specify Quantity & Cost) *",
"Packaging Cost-(Corrugated/PP/Plastic/Exports Grade) *"
  ];
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5, // Adjust the top margin as needed
        mb: 6, 
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="on"
      >
        <Grid container spacing={2}>
          {fieldNames.map((fieldName, index) => (
            <Grid item xs={6} key={index}>
              <TextField
                required
                id={`outlined-required-${index}`}
                label={fieldName}
                placeholder="Enter Details"
              />
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={5} justifyContent="center"  mt={4}>
        <Button variant="contained" >
          Back
        </Button>
        <Button variant="contained" >
        Continue
        </Button>
      </Stack>
      </Box>
      
    </Container>
  );
}