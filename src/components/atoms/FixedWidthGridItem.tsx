"use client";

import { Grid, styled } from "@mui/material";

const FixedWidthGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    flexBasis: 700,
    maxWidth: 700,
  },
}));

export default FixedWidthGridItem;
