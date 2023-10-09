import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';




export  function DesignFoundry() {

  const fieldNames = [
"Finished Wt (Machined) (Kg) *",
"2 Net Raw Casting Wt (Kg)   *",
"Surface Area - in MM Square *",
"Die-Casting Process *",
"No. of Impressions or Cavities *",
"Alternative Raw Material Suggested By Aakar *",
"Die cost (Rs Lakhs) *",
"Core Box Cost *",
"Expected Die Life (Shots) *",
"Die Manufacturing Period in Weeks *",
"No of shots/Hr *",
"No. of Sand Cores Required *",
"Total Sand Weight (Kg) *",
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