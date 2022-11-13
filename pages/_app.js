import '../styles/globals.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        light: "#757ce8",
        main: "#C2508F",
        dark: "#a23872",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#333",
      },
      info:{
        light: "#757ce8",
        main: "#4caf50",
        dark: "#146617",
        contrastText: "#fff"
      }
    }
  });
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
