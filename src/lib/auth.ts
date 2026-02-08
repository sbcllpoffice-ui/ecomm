// Minimal auth facade with localStorage fallback.
// Later can be swapped to Firebase by implementing the same functions using firebase/auth.

export type AdminUser = { email: string }

const AUTH_KEY = 'hoc_admin_user'

export function getCurrentUser(): AdminUser | null {
	try {
		const raw = localStorage.getItem(AUTH_KEY)
		return raw ? (JSON.parse(raw) as AdminUser) : null
	} catch {
		return null
	}
}

export async function signInWithPassword(email: string, password: string): Promise<AdminUser> {
	// Local fallback credentials (change as needed). Replace with Firebase later.
	const ok = (email === 'admin@hindustanoil.co' && password === 'admin123') || password === 'letmein'
	if (!ok) {
		throw new Error('Invalid credentials')
	}
	const user: AdminUser = { email }
	localStorage.setItem(AUTH_KEY, JSON.stringify(user))
	return user
}

export async function signOut(): Promise<void> {
	localStorage.removeItem(AUTH_KEY)
}

export function isAuthenticated(): boolean {
	return !!getCurrentUser()
}

