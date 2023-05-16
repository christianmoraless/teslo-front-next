import { initialData } from "@/database/products";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Counter } from "../ui";
import { FC } from "react";

const products = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
interface Props {
  editable: boolean;
}
export const CardList: FC<Props> = ({ editable }) => {
  return (
    <>
      {products.map((product) => (
        <Grid container spacing={2} key={product.slug} sx={{ mb: 2 }}>
          <Grid item xs={3}>
            <Link href={"/product/slug"}>
              <CardActionArea>
                <CardMedia
                  image={`products/${product.images[0]}`}
                  component="img"
                  sx={{ borderRadius: "5px" }}
                />
              </CardActionArea>
            </Link>
          </Grid>
          <Grid item xs={7}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>
              </Typography>
              {editable ? (
                <Counter />
              ) : (
                <Typography variant="h5">2 items</Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">{`$${product.price}`}</Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
