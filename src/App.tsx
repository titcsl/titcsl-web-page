import './App.css';
import Header from "@/components/Header.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/Footer.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="titcsl-ui-theme">
            <Header />
            <Outlet/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
