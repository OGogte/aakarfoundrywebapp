import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { BoltRounded, Details } from '@mui/icons-material';
import { MenuItem, Select, Typography } from '@mui/material';




export  function CustomerName() {

  
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
<Grid item xs={12} sm={12} > {/* Use xs={12} sm={12} for single column */}
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Customer Name </Typography>
  <TextField
    required
    id="part-name"
    label="Enter Details"
    variant="outlined"
    fullWidth
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12}>
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Customer Ref </Typography>
  <TextField
    required
    id="part-number-mach"
    label="Enter Details "
    variant="outlined"
    fullWidth
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12}>
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Contact Person </Typography>
  <TextField
    required
    id="part-number-cast"
    label="Enter Details"
    variant="outlined"
    fullWidth
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12}>
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Delivery Address </Typography>
  <TextField
    required
    id="project-details"
    label="Enter Details"
    variant="outlined"
    fullWidth
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12}>
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Inquiry Date </Typography>
  <TextField
    required
    id="enquiry-no"
    label=" Enter Details"
    variant="outlined"
    fullWidth
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12}>
  <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Category </Typography>
  <Select
  required
  id="category"
  label="Category"
  variant="outlined"
  fullWidth
  size="small"
>
  <MenuItem value="" >Select Category</MenuItem>
  <MenuItem value="RFQ">RFQ</MenuItem>
  <MenuItem value="ECN">ECN</MenuItem>
</Select>
</Grid>
</Grid>  <Stack direction="row" spacing={5} justifyContent="center"  mt={4} sx={{ mb: 4 }}>
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
