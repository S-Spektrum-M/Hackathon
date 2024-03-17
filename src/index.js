import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./footer.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"

ReactDOM.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Freehand&display=swap" rel="stylesheet" />
    <div Class="top-aligned-div">
        <p>
        </p>
    </div>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
    <div Class="bottom-aligned-div">
        <p>
            Ronen Maji, Siddharth Mohanty, Gurveer Singh, Arin Paruchuri
        </p>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
