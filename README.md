# Xvatar SDK 🎨 ![](https://xvatar.vercel.app/api/avatar/anish?size=20) ![](https://xvatar.vercel.app/api/avatar/sdk?size=20) ![](https://xvatar.vercel.app/api/avatar/xvatarsdk?size=20) ![](https://xvatar.vercel.app/api/avatar/xvatar?size=20)

Generate beautiful, unique gradient avatars for your users with Xvatar SDK - a powerful TypeScript library that creates consistent, personalized avatars from usernames. ✨

### Website : [Xvatar](https://xvatar.vercel.app)

## 🚀 Installation

```bash
npm install xvatar-sdk
# or
yarn add xvatar-sdk
# or
pnpm add xvatar-sdk
# or
bun add xvatar-sdk
```

## 💡 Quick Start

```typescript
import { generateAvatar } from "xvatar-sdk";

// Generate a simple avatar
const avatarUrl = generateAvatar({ username: "johndoe" });

// Customize your avatar
const customAvatar = generateAvatar({
  username: "johndoe",
  size: 200,
  format: "svg",
  rounded: 50,
});
```

## 🛠️ Features

- 🎯 Consistent avatars for the same username
- 🖼️ Support for PNG and SVG formats
- 📐 Customizable size and roundness
- ⚡ Lightweight and fast
- 🌈 Beautiful color combinations

## 🔧 API Reference

### generateAvatar(options)

Creates a unique avatar based on the provided options.

```typescript
interface AvatarOptions {
  username: string; // Required: Seed for the avatar
  size?: number; // Optional: Size in pixels (default: 140)
  format?: "png" | "svg"; // Optional: Output format (default: 'png')
  rounded?: number; // Optional: Corner roundness (default: 70)
  text?: string; // Optional: Custom text (SVG only)
}

// Basic usage
const basic = generateAvatar({
  username: "alice",
});

// All options
const advanced = generateAvatar({
  username: "bob",
  size: 200,
  format: "svg",
  rounded: 50,
  text: "BB",
});
```

## 🎨 Examples

Here are some example avatars generated with different options:

```typescript
// SVG with custom text
const svgAvatar = generateAvatar({
  username: "ceo@company.com",
  format: "svg",
  text: "CEO",
});

// Large PNG avatar
const largeAvatar = generateAvatar({
  username: "cool_user_123",
  size: 400,
});

// Square avatar
const squareAvatar = generateAvatar({
  username: "minimalist",
  rounded: 0,
});
```

---

Made with ❤️ by the [Anish Biswas](https://anish7.me) aka [Xeven777](https://github.com/Xeven777)
