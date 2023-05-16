import { Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
  return (
    <Grid>
      <Grid item xs={6}>
        <Typography>No. Products</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography>3 items</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Sub Total</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography>{`$${35.24}`}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Taxes</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography variant="subtitle1">{`$${35.24}`}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Total</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography variant="subtitle1">{`$${35.24}`}</Typography>
      </Grid>
    </Grid>
  );
};
