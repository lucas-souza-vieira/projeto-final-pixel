import { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import MainContainer from "../../components/MainContainer";

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer>
  
  </ThemeProvider>
  )
}
App.prototypes = AppProps;
