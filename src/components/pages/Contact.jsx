import React from "react";
import Layout from "../layout/Layout";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10, ml: 10,}}>
        <Typography variant="h4">Contact my restaurant</Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          excepturi laboriosam dolores dolorum possimus repellat numquam
          pariatur. Saepe similique animi, ex totam beatae aspernatur aliquid
          officiis, provident praesentium, officia et?
        </p>
      </Box>
    </Layout>
  );
};

export default Contact;
