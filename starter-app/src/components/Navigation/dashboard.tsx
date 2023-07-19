import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserCard from '../../pages/Home/components/UserCard';
import {useNavigate} from "react-router-dom";
import { IUser } from '../../interfaces/users';
import {FC, ReactElement, useEffect, useState} from "react";
import User from '../../pages/User/User';


export default function PositionedMenu(data: any){
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (status: string) => {

    if (status == "getRespon"){
      setAnchorEl(null);
      navigate(`/getSoloRes/${data?.id}`)
    }
    else if (status == "updateUser"){
      setAnchorEl(null);
      navigate(`/updateUser/${data?.id}`)
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
            sx={{
              width: "70%",
              height: "auto",
              backgroundColor: "secondary.main",
              '&:hover': {
                background: "#2b6963",
             },
              paddingTop: "1rem",
              paddingBottom: "1rem",
              color: "#ffff",
            }}
            
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Actions
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick= {() => handleClose("getRespon")}>Get resource</MenuItem>
        <MenuItem onClick={() => handleClose("updateUser")}>Update user</MenuItem>
      </Menu>
    </div>
  );
}

