import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Watch from './pages/Watch';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/watch/:id" element={ <Watch /> }></Route>
                <Route path="/search" element={ <Search /> }></Route>
                <Route path="*" element={ <NotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;