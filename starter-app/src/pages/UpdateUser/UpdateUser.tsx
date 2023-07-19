import React, { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import UpdateUserNav from "../../components/Navigation/UpdateUserNav";

const UpdateUser: FC<any> = (): ReactElement => {

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
        <UpdateUserNav/>
    </Box>
  );
};

export default UpdateUser;