"use client";
import { Chip, Grid, Typography } from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { ShopLayout } from "@/components";
import Link from "next/link";

interface GridColDef {
  field: string;
  headerName: string;
  width: number;
  description?: string;
  renderCell?: (params: GridCellParams) => React.ReactElement;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Complete Name", width: 300 },
  {
    field: "paid",
    headerName: "Paid",
    description: "Any description",
    width: 200,
    renderCell: (params: GridCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Payed" variant="outlined" />
      ) : (
        <Chip color="error" label="Not Payed" variant="outlined" />
      );
    },
  },
  {
    field: "orden",
    headerName: "See Order",
    width: 200,
    renderCell: (params: GridCellParams) => {
      return (
        <Link href={`/orders/${params.row.id}`} passHref>
          See order
        </Link>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: "Christian Morales" },
  { id: 1, paid: false, fullname: "Christian Morales" },
  { id: 1, paid: true, fullname: "Christian Morales" },
  { id: 1, paid: true, fullname: "Christian Morales" },
  { id: 1, paid: false, fullname: "Christian Morales" },
];

export default function HistoryPage() {
  return (
    <ShopLayout title={"History"} pageDescription={"Client History"}>
      <Typography variant="h1" component={"h1"}>
        Orders History
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[10]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
