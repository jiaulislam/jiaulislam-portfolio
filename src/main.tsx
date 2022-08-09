import { createRoot, Root } from "react-dom/client";
import "./index.css";
import App from "app/app";

const root: Root = createRoot(document.querySelector("#root"));
root.render(<App />);
