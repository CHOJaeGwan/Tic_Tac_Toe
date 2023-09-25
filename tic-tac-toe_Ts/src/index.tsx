import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");

// React 18에서는 createRoot로 애플리케이션을 초기화
const root = createRoot(rootElement!);
root.render(<App />);
