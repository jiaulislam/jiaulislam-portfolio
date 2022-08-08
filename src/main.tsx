import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/app";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
