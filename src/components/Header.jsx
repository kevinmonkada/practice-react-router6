import {useState} from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export function Header() {
  const [count, setCount] = useState(0);
  return (
    <header>
      <h1>React Router 6 Practice</h1>
      <a
        href="https://reactrouter.com/en/main"
        target="_blank"
        rel="noreferrer">
        Documentación
      </a>
    </header>
  );
}
