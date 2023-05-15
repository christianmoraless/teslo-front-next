"use client";
import { ShopLayout } from "@/components";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <ShopLayout
      title={"Teslo-Shop"}
      pageDescription={"Encuentra los mejores productos de Teslo"}>
      <Typography variant="h1" component="h1">
        Teslo-Shop
      </Typography>
      <Typography variant="h2">Todos los productos</Typography>
    </ShopLayout>
  );
}
