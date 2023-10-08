import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';




export  function RfqAttributes() {

  const fieldNames = [
    "Part Name *",
    "Part Number - MACH  *",
    "Part Number - CAST  *",
    "Project Name/Other Details *",
    "Aakar Foundry Enquiry No *",
    "Qty Per Annum (Nos) *",
    "Product Life (in Years) *",
    "Process Reqd (HPDC, LPDC, GDC) *",
    "Aluminum Alloy Specification *",
    "Requirements - Raw or Machined *",
    "Shot Blasting *",
    "Specific Product & QC requirements  *",
    "Anodizing / Chromostising Required ? *",
    "Anodizing /Chromotising Required ? *",
    "Power Coating Required? What Colour? *",
    "Bought Out Materials Details *",
    "Leak testing & Pressure Requirement *",
    "Impregnation Required? *",
    "Heat treatment Required? *",
    "Packaging -Corrugated/PP/Plastic/Exports Grade? *",
    "Delivery Location & Basis  *",
    "(Ex-Works /FOB/CIF/DDP/DDU) *",
    "Annual Tonnage - MT *",
    "Quote Currency (£, €, $, INR) *",
    
    
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
