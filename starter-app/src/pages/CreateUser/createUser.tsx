import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import ComposedTextField from "../../components/Navigation/TextField";

const CreateUser: FC<any> = (): ReactElement => {

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ComposedTextField/>
    </Box>
  );
};

export default CreateUser;