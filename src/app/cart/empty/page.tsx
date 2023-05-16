"use client";

import { Box, Typography } from "@mui/material";
import { ShopLayout } from "@/components";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function Page() {
  return (
    <ShopLayout
      title="Empty cart"
      pageDescription="You have no items in your cart"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height="calc(100vh-200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Typography>You cart is empty</Typography>
          <Link href={"/"} passHref>
            <Typography typography={"h4"} color={"secondary"}>
              Back
            </Typography>
          </Link>
        </Box>
      </Box>
    </ShopLayout>
  );
}
