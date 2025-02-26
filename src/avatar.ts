import { AvatarOptions } from "./types";

const DEFAULT_OPTIONS = {
  rounded: 70,
  size: 140,
  text: undefined,
  domain: "https://xvatar.vercel.app",
};

export function generateAvatar(options: AvatarOptions): string {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const { rounded, size, text, format, domain, username } = mergedOptions;
  const isSvg = format === "svg" ? ".svg" : "";
  let baseURL = `${domain}/api/avatar/${username}${isSvg}?rounded=${rounded}&size=${size}`;

  if (text && isSvg === ".svg") {
    baseURL += `&text=${text}`;
  }

  return baseURL;
}
