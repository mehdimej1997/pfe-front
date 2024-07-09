import z from "zod";
import { UserSchema } from "./user";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginDto = z.infer<typeof LoginSchema>;

export const SignUpSchema = z.object({
  name: z
    .string({
      required_error: "Nom est requis",
      invalid_type_error: "Nom est invalide",
    })
    .min(6, { message: "minimum 6 caractères" }),
  username: z
    .string({
      required_error: "Username est requis",
      invalid_type_error: "Username est invalide",
    })
    .min(6, { message: "minimum 6 caractères" })
    .refine(
      (str) => {
        const regex = new RegExp(/^\S*$/);
        return regex.test(str);
      },
      { message: "Username ne doit pas contenir des espaces" }
    ),
  email: z
    .string({
      required_error: "Email est requis",
      invalid_type_error: "Email est invalide",
    })
    .email({ message: "Email est invalide" }),
  password: z.string().refine(
    (str) => {
      const regex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
      return regex.test(str);
    },
    { message: "Mot de passe est faible" }
  ),
});

export type SignUpDto = z.infer<typeof SignUpSchema>;

export const AuthResponseSchema = z.object({
  user: UserSchema,
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type AuthResponseDto = z.infer<typeof AuthResponseSchema>;
