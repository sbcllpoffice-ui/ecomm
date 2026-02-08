import { createContext, useContext, useEffect, useState } from 'react'
import {  getCurrentUser, signInWithPassword, signOut, type AdminUser } from '../lib/auth'
import type { ReactNode} from 'react'
type AuthContextValue = {
	user: AdminUser | null
	signIn: (email: string, password: string) => Promise<void>
	signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<AdminUser | null>(null)

	useEffect(() => {
		setUser(getCurrentUser())
	}, [])

	async function handleSignIn(email: string, password: string) {
		const u = await signInWithPassword(email, password)
		setUser(u)
	}

	async function handleSignOut() {
		await signOut()
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, signIn: handleSignIn, signOut: handleSignOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const ctx = useContext(AuthContext)
	if (!ctx) throw new Error('useAuth must be used within AuthProvider')
	return ctx
}


