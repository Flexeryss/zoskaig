// src/components/NavBar.tsx

"use client";

import React from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "../components/Themeprovider"; // Adjust the path if necessary

export default function Navbar() {
  const [value, setValue] = React.useState<string>("/"); // Track selected value
  const router = useRouter();
  const { data: session, status } = useSession();
  const { isDarkMode, toggleTheme } = useTheme(); // Access dark mode toggle and state

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue); // Update the selected value
    if (
      !session &&
      !["/auth/registracia", "/auth/prihlasenie", "/", "/o-mne"].includes(newValue)
    ) {
      router.push("/auth/registracia");
    } else {
      router.push(newValue);
    }
  };

  const nonAuthPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O mne", value: "/o-mne", icon: <AccessibilityIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  const authPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladanie", icon: <SearchIcon /> },
    { label: "Pridať", value: "/prispevok", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  // Default icon colors
  const defaultIconColor = isDarkMode ? "grey" : "black"; // grey for dark mode, black for light mode
  const selectedIconColor = isDarkMode ? "red" : "blue"; // red for dark mode on click, blue for light mode on click

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={path.icon}
            sx={{
              color: value === path.value ? selectedIconColor : defaultIconColor, // Change icon color based on selection
            }}
          />
        ))}
      </BottomNavigation>

      {/* Dark/Light mode button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16, // Padding from bottom
          right: 16, // Padding from right
          zIndex: 1300, // Keep it above other elements
        }}
      >
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={{
            backgroundColor: "background.paper",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
}
