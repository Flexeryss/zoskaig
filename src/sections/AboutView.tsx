// src/sections/AboutView.tsx

import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

const AboutView = () => {
  const theme = useTheme(); // Access the MUI theme

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: 4,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          padding: 3,
          backgroundColor: theme.palette.background.default, // Default background color
          color: theme.palette.text.primary, // Keep text color according to theme
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#be03fc', // Set color to purple
            fontWeight: 'bold',
            marginBottom: 2,
          }}
        >
          O stránke
        </Typography>

        {/* About Content */}
        <Typography variant="body1" paragraph>
          Vitaj na ZoskaSnap! 🎉 Táto platforma je miestom, kde môžeš zdieľať svoje fotky, objavovať nový obsah a spojiť sa s ostatnými používateľmi – podobne ako na Instagrame, ale s mojím vlastným štýlom.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc', // Updated purple color
            fontWeight: 'bold',
            fontSize: '1.5rem', // Increased size
            marginBottom: 1,
          }}
        >
          Kto za tým stojí?
        </Typography>
        <Typography variant="body1" paragraph>
          👤 Tvorca: Nikolas <br />
          💡 Nápad: Chcel som vytvoriť modernú platformu na zdieľanie obsahu, ktorá je rýchla, bezpečná a dostupná pre všetkých.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc', // Updated purple color
            fontWeight: 'bold',
            fontSize: '1.5rem', // Increased size
            marginBottom: 1,
          }}
        >
          Ako to funguje?
        </Typography>
        <ul>
          <li>Môžeš si vytvoriť profil a pridávať príspevky 📸</li>
          <li>Sleduj ostatných používateľov a interaguj s ich obsahom ❤️</li>
          <li>Všetko je optimalizované pre rýchlosť a jednoduché používanie ⚡</li>
        </ul>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc', // Updated purple color
            fontWeight: 'bold',
            fontSize: '1.5rem', // Increased size
            marginBottom: 1,
          }}
        >
          Technológie za projektom
        </Typography>
        <ul>
          <li>🚀 Next.js – moderný framework na rýchle a dynamické aplikácie</li>
          <li>🛢 Prisma – výkonná správa databáz</li>
          <li>🎨 Material UI – pekný a prehľadný dizajn</li>
          <li>🔐 NextAuth.js – bezpečná autentifikácia</li>
          <li>🌍 Vercel – hosting, ktorý zabezpečuje rýchle načítanie stránky</li>
        </ul>

        <Typography variant="body1" paragraph>
          Tento projekt stále vylepšujem, takže ak máš akékoľvek nápady alebo spätnú väzbu, budem rád, ak sa ozveš! 😊
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutView;
