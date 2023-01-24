import { GlobalStyle } from "./Global/style";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
