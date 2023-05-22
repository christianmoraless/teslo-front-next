"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Badge } from "@mui/material";
import { SearchOffOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <AppBar>
      <Toolbar>
        <Link
          href={"/"}
          passHref
          style={{ color: "black", textDecoration: "none" }}>
          Teslo | Shop
        </Link>
        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link href={"/category/men"} passHref>
            <Button>Men</Button>
          </Link>
          <Link href={"/category/women"} passHref>
            <Button>Women</Button>
          </Link>
          <Link href={"/category/childs"} passHref>
            <Button>Childrens</Button>
          </Link>
        </Box>

        <Box flex={1} />
        <IconButton>
          <SearchOffOutlined />
        </IconButton>
        <Link href={"/cart"} passHref>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Link>
        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
