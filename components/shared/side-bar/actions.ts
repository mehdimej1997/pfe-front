"use server";

import { cookies } from "next/headers";

export const clearCookies = () => {
  const cookie = cookies();
  cookie.delete("user-session");
};
