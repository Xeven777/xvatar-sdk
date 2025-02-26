/**
 * Supported image formats for avatar generation
 */
export type ImageFormat = "png" | "svg";

/**
 * Configuration options for avatar generation
 */
export interface AvatarOptions {
  /** Username used to generate the avatar (required) */
  username: string;

  /**
   * Size of the avatar in pixels
   * @default 140
   */
  size?: number;

  /**
   * Output format of the avatar
   * @default 'png'
   */
  format?: ImageFormat;

  /**
   * Border radius in pixels for rounded corners
   * 0 = sharp corners, size/2 = fully rounded
   * @default 70
   */
  rounded?: number;

  /**
   * Custom text to display instead of initials
   * Only applies to SVG format
   * @default undefined
   */
  text?: string;

  /**
   * Add user silhouette icon to the avatar
   * @default false
   */
  userLogo?: boolean;
}
