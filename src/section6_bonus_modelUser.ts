// Create a UserProfile type with required and optional properties

// Your code here 👇

type UserProfile = {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  bio?: string;
  avatarUrl?: string;
};

const userProfile: UserProfile = {
  id: 1,
  username: "MidnightEnvy",
  email: "tom@example.com",
  createdAt: "2026-09-09",
  bio: "Learning TypeScript",
  avatarUrl: "https://example.com/avatar.png"
};