import { AuthResponseDto, LoginDto, SignUpDto } from "@/dto";
import { api } from "../axios.config";

export const login = (credentials: LoginDto) =>
  api.post<AuthResponseDto>("/auth/login", credentials);

export const signUp = (user: SignUpDto) => api.post("/auth/register", user);
