import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./inicio";


export default function Navegacao() {

    return (
           <BrowserRouter>
                    <Routes>

                    <Route path="/" element={<Inicio/>}/>

                    </Routes>
           </BrowserRouter>
    )
}