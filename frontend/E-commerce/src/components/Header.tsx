import { useNavigate } from "react-router"

export default function Header() {
    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem("token")
        navigate("/")
    }

    return(
        <div>
            <h1>Header</h1>
            <button onClick={logout}>Log out</button>
        </div>
    )
}