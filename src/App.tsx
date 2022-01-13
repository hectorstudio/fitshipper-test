import React from "react";
import Addresses from "./containers/Addresses";

function App() {
  return (
    <div className="w-full flex relative">
      <div className="py-2 align-middle inline-block w-full max-w-5xl mx-auto sm:px-6 lg:px-8">
        <Addresses />
      </div>
    </div>
  );
}

export default App;
