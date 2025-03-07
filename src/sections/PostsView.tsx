import { Container, Grid, Typography, Box, IconButton, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { getPosts } from '@/app/actions/posts';
import Image from 'next/image';

const PostsView = async () => {
  const posts = await getPosts();

  return (
    <Container sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Zoznam príspevkov
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Box 
              sx={{ 
                border: '1px solid #ddd', 
                borderRadius: 2, 
                padding: 2, 
                textAlign: 'center',
                backgroundColor: 'background.paper',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
                <Image
                  src={post.imageUrl}
                  alt={post.caption || 'Post image'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ 
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                {post.caption}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Pridal: {post.user.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Dátum: {new Date(post.createdAt).toLocaleDateString('sk-SK')}
              </Typography>
              
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center" 
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <IconButton 
                    sx={{ 
                      '&:hover': {
                        color: '#be03fc',
                      }
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <Typography variant="body2">
                    0
                  </Typography>
                </Box>
                <IconButton
                  sx={{ 
                    '&:hover': {
                      color: '#be03fc',
                    }
                  }}
                >
                  <CommentIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsView;
