import { AvatarOptions } from "./types";

const DEFAULT_OPTIONS = {
  rounded: 70,
  size: 140,
  text: undefined,
  isSvg: false,
  domain: "https://xvatar.vercel.app",
};

export function generateAvatarURL(
  username: string,
  options: AvatarOptions = { username: "" }
): string {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const { rounded, size, text, isSvg, domain } = mergedOptions;
  const fileExtension = isSvg ? ".svg" : "";
  let baseURL = `${domain}/api/avatar/${username}${fileExtension}?rounded=${rounded}&size=${size}`;

  if (text && isSvg) {
    baseURL += `&text=${text}`;
  }

  return baseURL;
}