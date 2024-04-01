import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { PlansProvider } from "./context/Plans.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PlansProvider>
    <App />
  </PlansProvider>
);
