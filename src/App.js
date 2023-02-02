import { GlobalStyle } from "./Global/style";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    localStorage.getItem("Theme") === "dark" ? setTheme(darkTheme) : setTheme(lightTheme);
  
  }, []); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <themeContext.Provider value={[theme, setTheme]}>
          <GlobalStyle />
    
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Sign-up" element={<SignUp />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/List" element={<List />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </themeContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
