import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Watch from './pages/Watch';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import RegisterVideo from './pages/RegisterVideo';
import FavoritesProvider from './contexts/Favorites';

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/watch/:id" element={ <Watch /> }></Route>
                    <Route path="/search" element={ <Search /> }></Route>
                    <Route path="/favorites" element={ <Favorites /> }></Route>
                    <Route path="/register" element={ <RegisterVideo /> }></Route>
                    <Route path="*" element={ <NotFound /> }></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;