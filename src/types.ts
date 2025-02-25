export interface AvatarOptions {
  username: string;
  size?: number; // Default size can be set in the implementation
  format?: 'png' | 'svg'; // Supported formats
  rounded?: number; // Roundness of the avatar
  text?: string; // Initials or text for SVG avatars
}