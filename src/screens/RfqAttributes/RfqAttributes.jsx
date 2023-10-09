import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';




export  function RfqAttributes() {

  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 5,
        mb:2,
      }}
    >

    <Box
  component="form"
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
  noValidate
  autoComplete="on"
>
  <Grid container spacing={4}>
    <Grid item xs={12} sm={6} >
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > Part Name </Typography>
      <TextField
        required
        id="part-name"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small" 
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > Part Number - MACH </Typography>

      <TextField
        required
        id="part-number-mach"
        label="Enter Details  "
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Part Number - CAST </Typography>

      <TextField
        required
        id="part-number-cast"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  >Project Name/Other Details</Typography>

      <TextField
        required
        id="project-details"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  >Aakar Foundry Enquiry No</Typography>

      <TextField
        required
        id="enquiry-no"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Qty Per Annum (Nos) </Typography>

      <TextField
        required
        id="qty-per-annum"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > Product Life (in Years) </Typography>

      <TextField
        required
        id="product-life"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Process Reqd (HPDC, LPDC, GDC) </Typography>

      <TextField
        required
        id="process-required"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Aluminum Alloy Specification</Typography>

      <TextField
        required
        id="alloy-specification"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} >Requirements - Raw or Machined</Typography>

      <TextField
        required
        id="requirements-raw-or-machined"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Shot Blasting </Typography>

      <TextField
        required
        id="shot-blasting"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > Specific Product & QC requirements </Typography>

      <TextField
        required
        id="specific-product-qc-requirements"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Anodizing Required/Chromotising Required? </Typography>

      <TextField
        required
        id="anodizing-required"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Power Coating Required? What Colour? </Typography>

      <TextField
        required
        id="power-coating-required"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > Bought Out Materials Details </Typography>

      <TextField
        required
        id="bought-out-materials-details"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} >Leak testing & Pressure Requirement</Typography>

      <TextField
        required
        id="leak-testing-pressure-requirement"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  >Impregnation Required? </Typography>

      <TextField
        required
        id="impregnation-required"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}} > Heat treatment Required?</Typography>

      <TextField
        required
        id="heat-treatment-required"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Packaging - Corrugated/PP/Plastic/Exports Grade?</Typography>

      <TextField
        required
        id="packaging"
        label=" Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Delivery Location & Basis</Typography>

      <TextField
        required
        id="delivery-location-basis"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > (Ex-Works /FOB/CIF/DDP/DDU) </Typography>

      <TextField
        required
        id="delivery-location-basis"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Typography variant="subtitle1"  sx={{ textAlign: 'left', color: '#054470',fontWeight: '650', fontSize: '1.2rem'}}  > Annual Tonnage - MT </Typography>

      <TextField
        required
        id="annual-tonnage"
        label="Enter Details"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Grid>
    
  </Grid>
  <Stack direction="row" spacing={5} justifyContent="center"  mt={4} sx={{ mb: 4 }}>
        <Button variant="contained"  size="large">
          Back
        </Button>
        <Button variant="contained" size="large" >
        Continue
        </Button>
      </Stack>
</Box>
</Container>
  );
}
