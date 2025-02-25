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
  size: 400,
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
// Basic usage
const basic = generateAvatar({
  username: "alice",
});

// All options
const advanced = generateAvatar({
  username: "bob", // Required: Seed for the avatar
  size: 300, // Optional: Size in pixels (default: 240)
  format: "svg", // Optional: 'png' or 'svg' (default: 'png')
  rounded: 80, // Optional: Corner roundness (default: 120)
});
```

## 🎨 Examples

Here are some example avatars generated with different options:

```typescript
// Professional avatar
const professional = generateAvatar({
  username: "ceo@company.com",
  size: 500,
  rounded: 100,
});

// Social media profile
const social = generateAvatar({
  username: "cool_user_123",
  size: 200,
  format: "svg",
});

// Minimal square avatar
const minimal = generateAvatar({
  username: "minimalist",
  rounded: 0,
});
```

---

Made with ❤️ by the [Anish Biswas](https://anish7.me) aka [Xeven777](https://github.com/Xeven777)
