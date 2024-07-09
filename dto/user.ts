import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  isTwoFactorEnabled: z.boolean(),
  twoFactorSecret: z.string().nullable(),
  isActive: z.boolean(),
  isEmailConfirmed: z.boolean(),
  isOAuthAccount: z.boolean(),
  isGoogleAccount: z.boolean(),
  isGithubAccount: z.boolean(),
  color: z.string(),
  department: z.string().nullable(),
  organisation: z.string().nullable(),
  projectIDs: z.array(z.number()),
  favoriteProjectIDs: z.array(z.number()),
  favoriteBoardIDs: z.array(z.number()),
  teamsLeaderIDs: z.number(),
});

export type UserDto = z.infer<typeof UserSchema>;
