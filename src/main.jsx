

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { PlayerProvider } from "./context/PlayerContext";
// import "./index.css"; // ✅ THIS IS CRITICAL

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <PlayerProvider>
//         <App />
//       </PlayerProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import "./index.css"; // ✅ REQUIRED

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
