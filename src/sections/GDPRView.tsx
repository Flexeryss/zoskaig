import { Box, Container, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Importing the arrow back icon
import { useRouter } from "next/navigation"; // Importing the useRouter hook

const GDPRView = () => {
  const theme = useTheme(); // Access the MUI theme
  const router = useRouter(); // Access the Next.js router

  // Function to navigate to the signup page
  const goToSignup = () => {
    router.push("/auth/registracia");
  };

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
          position: 'relative', // Make this box the reference point for the button positioning
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
          Zásady ochrany osobných údajov (GDPR)
        </Typography>

        {/* GDPR Content */}
        <Typography variant="body1" paragraph>
          Táto stránka sa zaväzuje chrániť vaše osobné údaje v súlade s nariadením GDPR.
        </Typography>

        {/* Section headers with increased size and purple color */}
        <Typography
          variant="h5"
          sx={{
            color: '#be03fc', // Updated purple color
            fontWeight: 'bold',
            fontSize: '1.5rem', // Increased size
            marginBottom: 1,
          }}
        >
          1. Aké údaje zbierame?
        </Typography>
        <ul>
          <li>Údaje účtu: Vaše meno, priezvisko, e-mailovú adresu, užívateľské meno, a heslo.</li>
          <li>Obsah: Fotografie, videá, komentáre a ďalšie príspevky, ktoré na stránke zdieľate.</li>
          <li>Technické údaje: IP adresa, typ zariadenia, cookies a ďalšie údaje potrebné na zlepšenie funkčnosti stránky.</li>
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
          2. Ako údaje používame?
        </Typography>
        <ul>
          <li>Poskytovania našich služieb a umožnenia ich používania.</li>
          <li>Zabezpečenia ochrany vášho účtu a obsahu.</li>
          <li>Analýzy, ako sa stránka používa, aby sme ju mohli zlepšovať.</li>
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
          3. Vaše práva
        </Typography>
        <ul>
          <li>Právo na prístup k vašim údajom.</li>
          <li>Právo na ich opravu alebo vymazanie.</li>
          <li>Právo na obmedzenie spracovania vašich údajov.</li>
          <li>Právo namietať voči spracovaniu údajov.</li>
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
          4. Ako nás kontaktovať?
        </Typography>
        <Typography variant="body1" paragraph>
          Ak máte akékoľvek otázky alebo požiadavky týkajúce sa vašich údajov, môžete nás kontaktovať prostredníctvom správy na stránke Zoska Snap.
        </Typography>

        {/* Button at the bottom right corner of the content box */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16, // Padding from the bottom of the content box
            right: 16, // Padding from the right of the content box
          }}
        >
          <IconButton
            onClick={goToSignup}
            color="primary"
            sx={{
              backgroundColor: theme.palette.background.paper,
              boxShadow: 3,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default GDPRView;
