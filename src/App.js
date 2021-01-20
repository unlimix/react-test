import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Cont from "./Components/Cont";

export default function App() {
  return (
    <div>
      <Header />
      <Cont />
      <h1>Hello Ярик!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
