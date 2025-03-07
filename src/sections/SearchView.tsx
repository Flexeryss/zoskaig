"use client";

import { Container, Typography, TextField, Avatar, Paper, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { getProfiles } from '@/app/actions/profiles';

interface User {
  id: string;
  name: string | null;
  image: string | null;
  profile: {
    location: string | null;
    interests: string[];
  } | null;
}

const SearchView = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await getProfiles();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user => 
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.profile?.location?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 3,
          fontWeight: 'bold'
        }}
      >
        Hľadanie používateľov
      </Typography>

      <TextField
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Hľadať podľa mena alebo lokality..."
        sx={{
          mb: 4,
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        }}
      />

      <Grid container spacing={2}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Avatar
                src={user.image || undefined}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                  bgcolor: 'grey.300',
                  fontSize: '2rem',
                }}
              >
                {user.name?.[0]?.toUpperCase() || '?'}
              </Avatar>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 0.5,
                }}
              >
                {user.name || 'Neznámy používateľ'}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {user.profile?.location || 'Neznáma lokalita'}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: '0.875rem',
                }}
              >
                {user.profile?.interests?.length ? 
                  'Záujmy: ' + user.profile.interests.join(', ') : 
                  'Žiadne záujmy'}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchView;
