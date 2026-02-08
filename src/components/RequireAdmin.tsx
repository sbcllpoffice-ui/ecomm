import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RequireAdmin({ children }: { children: ReactNode }) {
	const { user } = useAuth()
	const location = useLocation()
	if (!user) {
		return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />
	}
	return children
}

export default RequireAdmin


