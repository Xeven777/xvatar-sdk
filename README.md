# xvatar-sdk/xvatar-sdk/README.md

# Xvatar SDK

Xvatar SDK is a TypeScript library for generating avatars based on usernames. It provides a simple interface to create and customize avatars in various formats.

## Installation

To install the Xvatar SDK, use npm:

```
npm install xvatar-sdk
```

## Usage

To use the Xvatar SDK, import the necessary functions from the package:

```typescript
import { generateAvatar } from 'xvatar-sdk';
```

### Generating an Avatar

You can generate an avatar by calling the `generateAvatar` function with the required parameters:

```typescript
const avatarUrl = generateAvatar({
  username: 'exampleUser',
  size: 240,
  format: 'png',
});
```

### Avatar Options

The `generateAvatar` function accepts an options object with the following properties:

- `username`: The username or seed for generating the avatar (string, required).
- `size`: The size of the avatar in pixels (number, optional, default: 240).
- `format`: The format of the avatar, either 'png' or 'svg' (string, optional, default: 'png').
- `rounded`: The roundness of the avatar corners (number, optional, default: 120).

## API Reference

### `generateAvatar(options: AvatarOptions): string`

Generates an avatar URL based on the provided options.

#### Parameters

- `options`: An object containing the avatar options.

#### Returns

- A string representing the URL of the generated avatar.