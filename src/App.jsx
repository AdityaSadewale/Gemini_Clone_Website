import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main"; // Fixed import path


const App = () => {
  return (
    // overflow: hidden prevents the whole page from scrolling
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
