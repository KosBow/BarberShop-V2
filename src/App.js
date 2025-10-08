import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, Button } from "@material-tailwind/react";
import NavBar from "./components/nav/NavBar";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className="App">
                  <NavBar />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

