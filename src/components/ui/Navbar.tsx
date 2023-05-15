import Link from "next/link";
import { useEffect, useState } from "react";
import { AppBar, Toolbar, Link as LinkMui, Typography } from "@mui/material";

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
        <Link href={"/"} passHref>
          <LinkMui component={"a"} display={"flex"} alignItems={"center"}>
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </LinkMui>
        </Link>

        {/* <Box></Box> */}
      </Toolbar>
    </AppBar>
  );
};
