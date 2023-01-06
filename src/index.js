import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <div className="App">
            <div className="container">
                <h1>World Weather</h1>
                <App />
                <div className="footer">
                    <small>
                        <a href="https://github.com/VasilisaKruzenshtern/a-react-weather-app.git">GitHub Weather App{" "}</a>
                        by Olena Palchykova
                    </small>
                    
                </div>
            </div>
            
        </div>
    </StrictMode>
);