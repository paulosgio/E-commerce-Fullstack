import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";
import MainLayout from "../layout/mainLayout";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/cart" element={
                    <PrivateRoute>
                        <MainLayout>
                            <Cart/>
                        </MainLayout>
                    </PrivateRoute>
                }/>
                <Route path="/home/product/:id" element={
                    <PrivateRoute>
                        <MainLayout>
                            <Product/>
                        </MainLayout>
                    </PrivateRoute>
                }/>
                <Route path="/home" element={
                    <PrivateRoute>
                        <MainLayout>
                            <Home/>
                        </MainLayout>
                    </PrivateRoute>
                }/>
            </Routes>
        </BrowserRouter>
    )
}