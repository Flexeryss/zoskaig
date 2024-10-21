
// src/app/page.tsx


import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import AuthHomeView from "@/sections/AuthHomeView"; // Adjust this path if needed
import NonAuthHomeView from "@/sections/NonAuthHomeView"; // Adjust this path if needed

export const metadata = { title: 'Domov | ZoskaSnap' };

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) {
    return <Typography>Načítava sa...</Typography>; // Loading state
  }

  return (
    <>
      {session ? (
        <AuthHomeView />
      ) : (
        <NonAuthHomeView />
      )}
    </>
  );
}










