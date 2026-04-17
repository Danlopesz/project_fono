import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SalaProfessores from "@/pages/SalaProfessores";
import Banheiro from "@/pages/Banheiro";
import Refeitorio from "@/pages/Refeitorio";
import Elevador from "@/pages/Elevador";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sala-professores" element={<SalaProfessores />} />
                <Route path="/banheiro" element={<Banheiro />} />
                <Route path="/refeitorio" element={<Refeitorio />} />
                <Route path="/elevador" element={<Elevador />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;