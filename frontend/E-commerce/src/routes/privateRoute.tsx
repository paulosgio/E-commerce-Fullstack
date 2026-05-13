import { Navigate } from "react-router";
import type { IPrivateRoute } from "../interfaces";

export default function PrivateRoute({ children }: IPrivateRoute) {
    const token = localStorage.getItem("token")
    if (!token) {
        return <Navigate to="/"/>
    }
    return children
}