// src/sections/NonAuthHomeView.tsx

import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NonAuthHomeView() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#be03fc', // Purple color for main title
          fontWeight: 'bold',
          marginBottom: 2,
        }}
      >
        Vitajte na ZoskaGram
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: '1.25rem', // Larger font size for the subheading
          marginTop: 1,
          marginBottom: 2, // Added margin bottom for spacing
        }}
      >
        Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>

      <Link href="/auth/registracia" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#be03fc',
            color: 'white',
            '&:hover': {
              backgroundColor: '#9902c7',
            },
          }}
        >
          Registrovať
        </Button>
      </Link>
    </Container>
  );
}
