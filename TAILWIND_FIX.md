# Fix for "Unknown at rule @tailwind css(unknownAtRules)" Error

## Root Cause
The error "Unknown at rule @tailwind css(unknownAtRules)" occurs because your editor's CSS linter doesn't recognize Tailwind's custom at-rules (@tailwind, @layer, etc.) as valid CSS syntax. This is a common issue when using Tailwind CSS with editors that have strict CSS validation.

## Solution 1: Update VS Code Settings
If you're using VS Code, add the following to your settings.json:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

To access VS Code settings.json:
1. Open VS Code
2. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac)
3. Type "Preferences: Open Settings (JSON)"
4. Add the setting above to the JSON object

## Solution 2: Install Tailwind CSS IntelliSense Extension
Install the official "Tailwind CSS IntelliSense" extension from the VS Code marketplace. This extension provides proper syntax highlighting and autocompletion for Tailwind CSS.

## Solution 3: Use .vscode/settings.json in Your Project
Create a `.vscode/settings.json` file in your project root with:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

## Verification
Your Tailwind CSS setup is actually correct. The @tailwind directives in your globals.css file are properly configured, and any @import rules should be placed BEFORE the @tailwind directives:

```css
@import url('...');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

These are valid Tailwind directives that will be processed by PostCSS during the build process. The error is only a warning from your editor's CSS validator and doesn't affect the functionality of your application.

## Critical Fix Applied
The @import rule for Material Symbols font has been moved to the top of the globals.css file, before the @tailwind directives, which resolves the CSS parsing error.

## Your Current Setup
Your project is properly configured with:
- tailwind.config.js with correct content paths
- postcss.config.js with tailwindcss and autoprefixer plugins
- globals.css with proper @tailwind directives
- All necessary dependencies installed

After applying one of the above solutions, the error should disappear from your editor.