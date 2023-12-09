import { Routes, Route, Navigate } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage'
import { ClothingPage } from './pages/ClothingPage'
import { CartPage } from './pages/CartPage'
import { ErrorPage } from './pages/ErrorPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/clothing" element={<ClothingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Navigate to="/welcome" />} />
        </Routes>
    )
}
