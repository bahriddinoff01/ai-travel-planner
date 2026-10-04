import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import LoadingScreen from "../pages/LoadingScreen"
import { Navigate } from "react-router-dom"


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    

    if (loading) {
        return <LoadingScreen />
    }

    if (user === null) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute