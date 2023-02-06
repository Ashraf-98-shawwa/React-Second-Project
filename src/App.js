import { GlobalStyle } from "./Global/style";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Global/theme";

// Pages
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main";
import List from "./Pages/List";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

// Context
import { themeContext } from "./Context/themeContex";
import { useEffect, useState } from "react";
import { useAuthContext } from "./Context/AuthContext";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const { isAuthorized, setToken, setisAuthorized } = useAuthContext();

  useEffect(() => {
    localStorage.getItem("Theme") === "dark"
      ? setTheme(darkTheme)
      : setTheme(lightTheme);

    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setisAuthorized(true);
    }
  }, [setToken, setisAuthorized]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <themeContext.Provider value={[theme, setTheme]}>
            <GlobalStyle />

            <Routes>
              <Route index element={<Navigate to="Login" />} />
              <Route
                path="/Login"
                element={isAuthorized ? <Navigate to="/Main" /> : <Login />}
              />
              <Route
                path="/Sign-up"
                element={isAuthorized ? <Navigate to="/Main" /> : <SignUp />}
              />
              <Route
                path="/Main"
                element={isAuthorized ? <Main /> : <Navigate to="/Login" />}
              />
              <Route
                path="/List"
                element={isAuthorized ? <List /> : <Navigate to="/Login" />}
              />
              <Route
                path="/Product"
                element={isAuthorized ? <Product /> : <Navigate to="/Login" />}
              />
              <Route
                path="/Cart"
                element={isAuthorized ? <Cart /> : <Navigate to="/Login" />}
              />
            </Routes>
          </themeContext.Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}

export default App;
