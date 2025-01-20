// src/app/(private)/prispevok/page.tsx

import { PrismaClient } from '@prisma/client';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// Initialize Prisma Client
const prisma = new PrismaClient();

export const metadata = { title: 'Zoznam prispevkov | ZoskaSnap' }

export default async function PostListing() {
  // Fetch the posts from the database, including user info
  const posts = await prisma.post.findMany({
    include: {
      user: true, // Include user data (e.g., name)
    },
    orderBy: {
      createdAt: 'desc', // Display the most recent posts first
    },
  });

  // Return JSX to display the posts
  return (
    <Container>
      <Typography variant="h4">Zoznam prispevkov</Typography>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Typography variant="h6">{post.caption}</Typography>
            <img src={post.imageUrl}  />
            <Typography variant="body2">Posted by: {post.user.name}</Typography>
            <Typography variant="body2">Date: {new Date(post.createdAt).toLocaleDateString()}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
}
