import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export function CustomerName() {
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const fieldNames = [
    "Customer Name *",
    "Customer Ref *",
    "Contact Person *",
    "Delivery Address *",
    "Inquiry Date *",
    "Category *"
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
            <Grid item xs={12} key={index}>
              {fieldName === "Category *" ? (
                <Select
                  labelId="category-label"
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select Category</MenuItem>
                  <MenuItem value="RFQ">RFQ</MenuItem>
                  <MenuItem value="ECN">ECN</MenuItem>
                </Select>
              ) : (
                <TextField
                  required
                  id={`outlined-required-${index}`}
                  label={fieldName}
                  placeholder="Enter Details"
                />
              )}
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={5} justifyContent="center" mt={4}>
          <Button variant="contained">
            Continue
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
