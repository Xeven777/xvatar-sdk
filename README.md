# Xvatar SDK 🎨 ![](https://xvatar.vercel.app/api/avatar/anish?size=20) ![](https://xvatar.vercel.app/api/avatar/sdk.svg?userLogo=true&size=20) ![](https://xvatar.vercel.app/api/avatar/xvatarsdk?size=20) ![](https://xvatar.vercel.app/api/avatar/xvatar?size=20)

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
  userLogo?: boolean; // Optional: Use user logo (default: false)
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
  userLogo: true,
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

// Cute user avatar
const squareAvatar = generateAvatar({
  username: "minimalist",
  rounded: 30,
  userLogo: true,
});
```

## 🖼️ Gallery

Here are some example avatars generated using Xvatar SDK:

### Default Avatars

![Default](https://xvatar.vercel.app/api/avatar/john?size=100)
![Default](https://xvatar.vercel.app/api/avatar/jane?size=100)
![Default](https://xvatar.vercel.app/api/avatar/alex?size=100)

### SVG with User Logo

![User Logo](https://xvatar.vercel.app/api/avatar/dev.svg?userLogo=true&size=100)
![User Logo](https://xvatar.vercel.app/api/avatar/cool.svg?userLogo=true&size=100)
![User Logo](https://xvatar.vercel.app/api/avatar/pro.svg?userLogo=true&size=100)

### Different Shapes

![Square](https://xvatar.vercel.app/api/avatar/square?rounded=0&size=100)
![Rounded](https://xvatar.vercel.app/api/avatar/rounded?rounded=30&size=100)
![Circle](https://xvatar.vercel.app/api/avatar/circle?rounded=100&size=100)

### SVG with Text

![Text](https://xvatar.vercel.app/api/avatar/text1.svg?text=AB&size=100)
![Text](https://xvatar.vercel.app/api/avatar/text2.svg?text=CD&size=100)
![Text](https://xvatar.vercel.app/api/avatar/text3.svg?text=XY&size=100)

---

Made with ❤️ by the [Anish Biswas](https://anish7.me) aka [Xeven777](https://github.com/Xeven777)
