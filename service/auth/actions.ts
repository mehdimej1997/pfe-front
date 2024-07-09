"use server";

import { AuthResponseDto } from "@/dto";
// import * as jose from "jose";
import { cookies } from "next/headers";

const encryptCookies = async (payload: AuthResponseDto) => {
  const { accessToken, user, refreshToken } = payload;
  // const { exp } = await jose.decodeJwt(accessToken);

  // const encryptedUSer = await new jose.SignJWT(user).setExpirationTime(
  //   exp || Date.now() + 1000 * 60
  // );
  // .setProtectedHeader({ alg: "HS256" })
  // .sign(new TextEncoder().encode(process.env.SECRET_KEY));

  try {
    const cookie = {
      user,
      accessToken,
      refreshToken,
    };

    return JSON.stringify(cookie);
  } catch (error) {
    console.error(error);
  }
};

export const setCookies = async (payload: AuthResponseDto) => {
  try {
    const encryptedCookies = await encryptCookies(payload);
    const cookie = cookies();
    if (!encryptedCookies) return;
    cookie.set("user-session", encryptedCookies);
  } catch (error) {
    console.error(error);
  }
};
