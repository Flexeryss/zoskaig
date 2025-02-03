import { PrismaClient } from '@prisma/client';
import { Container, Grid, Typography, Box } from '@mui/material';

// Initialize Prisma Client
const prisma = new PrismaClient();

const PostsView = async () => {
  // Fetch the posts from the database, including user info
  const posts = await prisma.post.findMany({
    include: {
      user: true, // Include user data (e.g., name)
    },
    orderBy: {
      createdAt: 'desc', // Display the most recent posts first
    },
  });

  return (
    <Container sx={{ textAlign: 'center' }}>
      {/* Center the header */}
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Zoznam prispevkov
      </Typography>
      {/* Create a grid layout to display posts */}
      <Grid container spacing={4} justifyContent="center">
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Box sx={{ border: '1px solid #ddd', borderRadius: 2, padding: 2, textAlign: 'center' }}>
              {/* Post image */}
              <img
                src={post.imageUrl}
                
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              {/* Post caption */}
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                {post.caption}
              </Typography>
              {/* Post user */}
              <Typography variant="body2">Posted by: {post.user.name}</Typography>
              {/* Post date */}
              <Typography variant="body2">
                Date: {new Date(post.createdAt).toLocaleDateString()}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsView;
