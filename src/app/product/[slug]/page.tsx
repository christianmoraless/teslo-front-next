"use client";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { initialData } from "@/database/products";
import { ShopLayout } from "@/components";
import { ProductSlideshow, SizeSelector } from "@/components/products";
import { Counter } from "@/components/ui";

const product = initialData.products[0];
export default function Page() {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
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
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle1">Quantity</Typography>
              <Counter />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={product.sizes[0]}
              />
            </Box>

            <Button color="secondary" className="circular-btn">
              Add to cart
            </Button>

            {/* <Chip label="Not are available" color="error" variant="outlined" /> */}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" fontWeight={700}>
                Description
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
