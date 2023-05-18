"use client";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ShopLayout, CardList, OrderSummary } from "@/components";

export default function Page() {
  return (
    <ShopLayout title="Summary" pageDescription="Summary Page">
      <Typography variant="h1" component={"h1"}>
        Cart
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList editable={false} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen</Typography>
              <Divider />

              <Box>
                <Link href={"/checkout/address"} passHref>
                  Editar
                </Link>
              </Box>

              <Typography variant="subtitle1">Address Direction</Typography>
              <Typography>Christian Morales</Typography>
              <Typography>Calle principal</Typography>
              <Typography>Tachira Venezuela</Typography>
              <Typography>Venezuela</Typography>
              <Typography>+584147066619</Typography>

              <OrderSummary />

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
