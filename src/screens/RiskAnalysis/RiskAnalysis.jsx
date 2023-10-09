import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';




export  function RiskAnalysis() {

  const fieldNames = [
    "Is there any risk associated with : (ü/û) *",
    "Manufacturing Requirement *",
    "Application *",
    "Internal Estimation *",

       
  ];
  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
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
