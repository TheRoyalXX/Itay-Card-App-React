import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

import { useTheme } from "../providers/ThemeProvider";

export default function AboutPage() {
  const {isDark} = useTheme();
  return (
    <Container sx={{ color: isDark? "white" : "black"}}>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "block" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="bussiness card example" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
