import React from "react";
import Restaurant from "./components/Restaurant";

function App() {
  return (
    <div className="main-content">
      <h1>Foodie Friends</h1>
      <div className="container">
        <div className="row">
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
        </div>
      </div>
    </div>
  );
}

export default App;
