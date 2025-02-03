// src/sections/NonAuthHomeView.tsx

import { Container, Typography } from "@mui/material";

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
        }}
      >
        Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>
    </Container>
  );
}
