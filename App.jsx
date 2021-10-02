
import React from 'react'
import { ThemeProvider } from './src/providers/theme.provider';
import { Home } from './src/screens/home.screen';

export default function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
