// src/sections/SignInView.tsx

"use client";

import { Button, Container, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

export default function SignInView() {
  const handleSignInWithGoogle = async () => {
    await signIn("google");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Prihlásenie
      </Typography>

      {/* Google Sign-In Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignInWithGoogle}
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GoogleIcon sx={{ mr: 1 }} />
        Prihlásiť sa pomocou Google
      </Button>

      {/* Message for users who don't have an account */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        Nemáte ešte účet?{" "}
        <Link href="/auth/registracia" style={{ textDecoration: "none", color: "#1976d2" }}>
          Chcete ísť na Registráciu?
        </Link>
      </Typography>
    </Container>
  );
}




      // {/* Facebook Sign Up */}
      // <Button
      //   variant="outlined"
      //   fullWidth
      //   startIcon={<FacebookIcon />}
      //   sx={{ mb: 4 }}
      // >
      //   Prihlásiť sa účtom Facebook
      // </Button>

      // {/* Divider */}
      // <Divider sx={{ width: "100%", mb: 2 }}>
      //   <Typography variant="body2">alebo</Typography>
      // </Divider>

      // {/* Email */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Email"
      //   type="email"
      //   variant="outlined"
      //   required
      //   defaultValue="your@email.com"
      // />

      // {/* Password */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Password"
      //   type="password"
      //   variant="outlined"
      //   required
      //   defaultValue="******"
      // />

      // {/* Checkbox */}
      // <FormControlLabel
      //   control={<Checkbox color="primary" />}
      //   label="Chcem dostávať novinky na email"
      //   sx={{ mt: 2 }}
      // />

      // {/* Sign Up Button */}
      // <Button
      //   variant="contained"
      //   fullWidth
      //   size="large"
      //   sx={{ mt: 2, mb: 1 }}
      // >
      //   Prihlásiť
      // </Button>