import { GlobalStyle } from "./Global/style";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main";
import List from "./Pages/List";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
