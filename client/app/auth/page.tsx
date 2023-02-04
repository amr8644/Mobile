"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "../api/axios";
import requests from "../api/requests";

const theme = createTheme();

export default function SignIn() {
   const [username, setUsername] = React.useState("");
   const [password, setPassword] = React.useState("");

   type PayloadType = {
      Username: { String: string; Valid: boolean };
      Password: { String: string; Valid: boolean };
   };

   const handleSubmit = async (event: any) => {
      try {
         event.preventDefault();
         const payload: PayloadType = {
            Username: { String: username, Valid: true },
            Password: { String: password, Valid: true },
         };
         const response = await axios.post(
            requests.login,
            {
               Username: { String: username, Valid: true },
               Password: { String: password, Valid: true },
            },
            { withCredentials: true }
         );

         return response.data;
      } catch (error: any) {
         console.log(error);
      }
   };

   return (
      <ThemeProvider theme={theme}>
         <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
               sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign in
               </Typography>
               <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
               >
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="username"
                     onChange={(e: any) => setUsername(e)}
                     label="Username"
                     name="username"
                     autoComplete="username"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     onChange={(e: any) => setPassword(e)}
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
                  <FormControlLabel
                     control={<Checkbox value="remember" color="primary" />}
                     label="Remember me"
                  />
                  <Button
                     //  onClick={(e: any) => handleSubmit(e)}
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                  >
                     Sign In
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <Link href="#" variant="body2">
                           Forgot password?
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link href="#" variant="body2">
                           {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Container>
      </ThemeProvider>
   );
}
