import React, { useState } from "react";
import Router from "./Routes/Router";
import { GlobalStyle } from "./styled";

function App() {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  return (
    <div>
      <GlobalStyle />
      <Router
        rightButtonText={rightButtonText}
        setRightButtonText={setRightButtonText}
      />
    </div>
  );
}

export default App;
