import React from "react";
import "./styles.css";
import Header from './Components/Header/Header';
import routes from './routes';

export default function App() {
  return (
    <div className="App">
      <Header />
      { routes }
    </div>
  );
}
