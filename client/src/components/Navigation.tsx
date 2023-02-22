import {
   AppBar,
   Container,
   Toolbar,
   Typography,
   Box,
   IconButton,
   Menu,
   MenuItem,
   Button,
   Avatar,
   Tooltip,
} from "@mui/material";
import { AdbOutlined } from "@mui/icons-material";
import * as React from "react";

const settings = ["Logout"];

function Navigation() {
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
   );

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar position="static">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <AdbOutlined
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
               />

               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/2.jpg"
                        />
                     </IconButton>
                  </Tooltip>
                  <Menu
                     sx={{ mt: "45px" }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >
                     {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                           <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
export default Navigation;
