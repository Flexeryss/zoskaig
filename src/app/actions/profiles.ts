'use server'

import { prisma } from "../api/auth/[...nextauth]/prisma";

export async function getProfiles() {
  try {
    const profiles = await prisma.user.findMany({
      include: {
        profile: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
    return profiles;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return [];
  }
}
