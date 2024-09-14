import { MyRoutes } from './index';
import React, { createContext, useState } from 'react';
import { Dark, Light, AuthContextProvider } from './index';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState('light');
  const themeStyle = theme === 'light' ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MyRoutes />
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
