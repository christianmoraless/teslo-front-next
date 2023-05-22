"use client";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ShopLayout, CardList, OrderSummary } from "@/components";
import { CreditCardOffOutlined } from "@mui/icons-material";

export default function OrderPage() {
  return (
    <ShopLayout title="Order Page" pageDescription="Order page">
      <Typography variant="h1" component={"h1"}>
        Order: #3123123
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Payment Pending"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}

      <Chip
        sx={{ my: 2 }}
        label="Paid"
        variant="outlined"
        color="success"
        icon={<CreditCardOffOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList editable={false} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 products)</Typography>
              <Divider />
              <Box display={"flex"} justifyContent={"end"}>
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

              <Box display={"flex"} justifyContent={"end"}>
                <Link href={"/cart"} passHref>
                  Editar
                </Link>
              </Box>
              <OrderSummary />

              <Box>
                <Chip
                  sx={{ my: 2 }}
                  label="Paid"
                  variant="outlined"
                  color="success"
                  icon={<CreditCardOffOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
