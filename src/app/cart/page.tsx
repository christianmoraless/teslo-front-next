"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ShopLayout } from "@/components";
import { CardList } from "@/components/cart";

export default function Page() {
  return (
    <ShopLayout title="Cart Page" pageDescription="Cart Page">
      <Typography variant="h1" component={"h1"}>
        Cart
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList editable />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Order</Typography>
              <Divider />
              {/* order summary */}
              <Box>
                <Button color="secondary" className="circular-btn">
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
