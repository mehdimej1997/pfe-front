import { UserDto } from "@/dto";
import { api } from "../axios.config";

export const me = () => api.get<UserDto>("/user/self");
