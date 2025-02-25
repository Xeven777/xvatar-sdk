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

  const { rounded, size, text, isSvg } = mergedOptions;

  const fileExtension = isSvg ? ".svg" : "";
  const baseURL = `${mergedOptions.domain}/api/avatar/${username}${fileExtension}`;
  const queryParams = new URLSearchParams();

  queryParams.append("rounded", String(rounded));
  queryParams.append("size", String(size));

  if (text && isSvg) {
    queryParams.append("text", text);
  }

  const queryString = queryParams.toString();

  return queryString ? `${baseURL}?${queryString}` : baseURL;
}
