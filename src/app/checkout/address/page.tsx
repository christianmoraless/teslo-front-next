"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ShopLayout } from "@/components";

export default function AddressPage() {
  return (
    <ShopLayout title="Address" pageDescription="Confirm Address-">
      <Typography variant="h1" component={"h1"}>
        Address
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direction" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direction 2" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="ZIP Code" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label="Country" value={1}>
              <MenuItem value={1}>Venezuela</MenuItem>
              <MenuItem value={2}>Colombia</MenuItem>
              <MenuItem value={3}>Brasil</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }} display={"flex"} justifyContent={"center"}>
        <Button color={"secondary"} className="circular-btn" size="large">
          Place order
        </Button>
      </Box>
    </ShopLayout>
  );
}
