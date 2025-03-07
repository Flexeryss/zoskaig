import { Box, Container, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

const TermsView = () => {
  const theme = useTheme();

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
          textAlign: 'left',
          padding: 3,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: '800px',
          width: '100%',
          position: 'relative',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#be03fc',
            fontWeight: 'bold',
            marginBottom: 2,
            textAlign: 'center',
          }}
        >
          Podmienky používania
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: 1,
            marginTop: 3,
          }}
        >
          1. Úvod
        </Typography>
        <Typography variant="body1" paragraph>
          Tieto Podmienky používania upravujú pravidlá využívania sociálnej siete ZoskaIG (ďalej len &quot;Platforma&quot;), ktorá umožňuje používateľom zdieľať fotografie, videá a komunikovať s ostatnými. Používaním našej Platformy súhlasíte s týmito podmienkami.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: 1,
            marginTop: 2,
          }}
        >
          2. Registrácia a účet
        </Typography>
        <ul>
          <li>Pre využívanie ZoskaIG je potrebné vytvoriť si účet s pravdivými a aktuálnymi údajmi.</li>
          <li>Každý používateľ zodpovedá za bezpečnosť svojho účtu a hesla.</li>
          <li>Je zakázané vytvárať falošné profily alebo sa vydávať za inú osobu.</li>
        </ul>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: 1,
            marginTop: 2,
          }}
        >
          3. Pravidlá používania
        </Typography>
        <Typography variant="body1" paragraph>
          Na ZoskaIG je zakázané zdieľať obsah, ktorý:
        </Typography>
        <ul>
          <li>porušuje autorské práva alebo iné práva tretích strán,</li>
          <li>obsahuje nenávistné prejavy, násilie, diskrimináciu alebo nevhodný materiál,</li>
          <li>šíri spam alebo zavádzajúce informácie.</li>
        </ul>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: 1,
            marginTop: 2,
          }}
        >
          4. Ochrana osobných údajov
        </Typography>
        <Typography variant="body1" paragraph>
          Vaše údaje chránime podľa platných právnych predpisov. Viac informácií nájdete v našich Zásadách ochrany osobných údajov.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: 1,
            marginTop: 2,
          }}
        >
          5. Zodpovednosť
        </Typography>
        <Typography variant="body1" paragraph>
          ZoskaIG nezodpovedá za obsah, ktorý zdieľajú používatelia. Používatelia nesú plnú zodpovednosť za svoje príspevky a interakcie.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#be03fc',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: 1,
            marginTop: 2,
          }}
        >
          6. Zmeny podmienok
        </Typography>
        <Typography variant="body1" paragraph>
          Tieto podmienky môžeme kedykoľvek aktualizovať. O podstatných zmenách vás budeme informovať priamo na Platforme.
        </Typography>

        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
        >
          <Link href="/auth/registracia" style={{ textDecoration: 'none' }}>
            <IconButton
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
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default TermsView;
