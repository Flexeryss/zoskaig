"use client"; // Mark this component as a Client Component

import * as React from 'react'; // Import React
import BottomNavigation from '@mui/material/BottomNavigation'; // Material UI BottomNavigation
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; // Material UI BottomNavigationAction
import HomeIcon from '@mui/icons-material/Home'; // Home icon
import AddBoxIcon from '@mui/icons-material/AddBox'; // Add post icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import LoginIcon from '@mui/icons-material/Login'; // Sign In icon
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'; // Sign Up icon
import { useState } from 'react'; // React hook for state management
import Link from 'next/link'; // Link component from Next.js

const NavBar = () => {
  const [value, setValue] = useState('home'); // State to manage the active bottom navigation item

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue); // Update the active navigation item
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} // Fix position at the bottom
      value={value} // Active navigation value
      onChange={handleChange} // Change handler for navigation
    >
      <BottomNavigationAction
        label="Home"
        value="home" // Value for Home
        icon={<HomeIcon />} // Home icon
        component={Link} // Use Next.js Link for navigation
        href="/" // Home page link
      />
      <BottomNavigationAction
        label="Add"
        value="add" // Value for Add
        icon={<AddBoxIcon />} // Add post icon
        component={Link} // Use Next.js Link for navigation
        href="/pridat" // Add post page link
      />
      <BottomNavigationAction
        label="Profile"
        value="profile" // Value for Profile
        icon={<AccountCircleIcon />} // Profile icon
        component={Link} // Use Next.js Link for navigation
        href="/profil" // Profile page link
      />
      <BottomNavigationAction
        label="Sign In"
        value="sign-in" // Value for Sign In
        icon={<LoginIcon />} // Sign In icon
        component={Link} // Use Next.js Link for navigation
        href="/auth/prihlasenie" // Sign In page link
      />
      <BottomNavigationAction
        label="Sign Up"
        value="sign-up" // Value for Sign Up
        icon={<AppRegistrationIcon />} // Sign Up icon
        component={Link} // Use Next.js Link for navigation
        href="/auth/registracia" // Sign Up page link
      />
    </BottomNavigation>
  );
};

export default NavBar; // Export the NavBar component


