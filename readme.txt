the requested application is implemented using Expo ,React native and typescript.
Package manager:NPM
entry point: App.tsx
running the expo server: npm start
running on Android: press 'a' when expo server is running

since the application did not contain much complexity i chose a simple folder structure where:
-'assets' contains the font (Ubuntu)
-'components' contains the main view (Container), Item(each toggle and its title),
MonoText(the styled <Text> component) and the styled toggle itself.
-'constants' contains the color theme used in this app.
- 'hooks' contains useFont hook written to load the font.
-'screens' contains the single screen.

