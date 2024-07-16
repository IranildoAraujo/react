import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pather from '../components/Pather';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Pather />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;