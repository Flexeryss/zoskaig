
import { Container,Typography,Box} from "@mui/material/";
import {Session} from "next-auth";

export const metadata = { title: 'Domov | ZoskaSnap' };

export default function AuthHome() {
  
  
    return (
    <Container>
        <Typography>Domovska stranka -prihlaseny user</Typography>
    </Container>

    
  );
}
