import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Watch from './pages/Watch';
import NotFound from './pages/NotFound';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/watch" element={ <Watch /> }></Route>
                <Route path="*" element={ <NotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;