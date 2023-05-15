import { ShopLayout } from "@/components";
import { initialData } from "@/database/products";
import { Box, Grid, Typography } from "@mui/material";

const product = initialData.products[0];
export default function Page() {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* slider */}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={"flex"} flexDirection={"column"}>
            {/* titulos */}
            <Typography variant="h1" component={"h1"}>
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component={"h1"}>
              {`$${product.price}`}
            </Typography>
            {/* qty */}
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
