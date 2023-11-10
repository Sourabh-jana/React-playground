import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import ComboBox from "./ui/comboBox";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      style={{ width: "100vw" }}
      padding={1}
      boxShadow={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h5">LOGO</Typography>
      <ComboBox />
      <Stack direction="row" gap={1}>
        <Button variant="outlined" size="small" color="info">
          Login
        </Button>
        <Button variant="contained" size="small" color="info">
          Register
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
