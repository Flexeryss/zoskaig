"use client";

import React, { useState } from "react";
import { Button, Container, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

export default function SignUpView() {
  const [isGdprAccepted, setIsGdprAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSignUpWithGoogle = async () => {
    if (!isGdprAccepted) {
      setShowError(true);
      return;
    }

    // Proceed with Google sign-up logic here
    await signIn("google");
  };

  const handleGdprChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGdprAccepted(event.target.checked);
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
        Registrácia
      </Typography>

      {/* Google Sign-Up Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignUpWithGoogle}
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GoogleIcon sx={{ mr: 1 }} />
        Registrovať sa pomocou Google
      </Button>

      {/* GDPR Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={isGdprAccepted}
            onChange={handleGdprChange}
            name="gdpr"
            color="primary"
          />
        }
        label={
          <Typography>
            Súhlasím s{" "}
            <Link href="/gdpr" style={{ color: "#be03fc", textDecoration: "none" }}>
              podmienkami GDPR
            </Link>{" "}
            a{" "}
            <Link href="/podmienky" style={{ color: "#be03fc", textDecoration: "none" }}>
              podmienkami používania
            </Link>
          </Typography>
        }
      />

      {/* Error Message for Missing GDPR Agreement */}
      {showError && !isGdprAccepted && (
        <Typography color="error" variant="body2" sx={{ mt: 2 }}>
          Musíš potvrdiť GDPR podmienky
        </Typography>
      )}

      {/* Message for users with an existing account */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        Už máte účet?{" "}
        <Link href="/auth/prihlasenie" style={{ textDecoration: "none", color: "#1976d2" }}>
          Chcete ísť na Prihlásenie?
        </Link>
      </Typography>
    </Container>
  );
}
