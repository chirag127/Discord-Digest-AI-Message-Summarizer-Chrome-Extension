// entrypoints/options/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Settings } from "@/src/features/settings/Settings";
import "@/src/features/ui-injection/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-slate-50">
      <Settings />
    </div>
  </React.StrictMode>,
);
