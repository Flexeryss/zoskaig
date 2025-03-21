'use server'

import { prisma } from "../api/auth/[...nextauth]/prisma";

// Function to fetch posts
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
        likes: true, // Include likes to show the like count
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Function to toggle like on a post (like or dislike)
export async function toggleLike(postId: number, userId: number) {
  try {
    const existingLike = await prisma.like.findUnique({
      where: {
        userId_postId: { userId: String(userId), postId: String(postId) }, // Convert to string
      },
    });

    if (existingLike) {
      // If the user has already liked the post, remove the like
      await prisma.like.delete({
        where: {
          userId_postId: { userId: String(userId), postId: String(postId) }, // Convert to string
        },
      });

      // Get the updated like count
      const updatedLikeCount = await prisma.like.count({
        where: { postId: String(postId) }, // Convert to string
      });

      return { message: 'Disliked', updatedLikeCount };
    } else {
      // If the user hasn't liked the post, add a like
      await prisma.like.create({
        data: {
          userId: String(userId), // Convert to string
          postId: String(postId), // Convert to string
        },
      });

      // Get the updated like count
      const updatedLikeCount = await prisma.like.count({
        where: { postId: String(postId) }, // Convert to string
      });

      return { message: 'Liked', updatedLikeCount };
    }
  } catch (error) {
    console.error('Error toggling like:', error);
    return { error: 'Failed to toggle like' };
  }
}
