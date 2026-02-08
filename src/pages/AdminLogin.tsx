import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

function AdminLogin() {
	const { signIn } = useAuth()
	const navigate = useNavigate()
	const location = useLocation() as unknown as { state?: { from?: string } }
	const [email, setEmail] = useState('admin@hindustanoil.co')
	const [password, setPassword] = useState('admin123')
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		setLoading(true)
		try {
			await signIn(email, password)
			navigate(location.state?.from || '/admin', { replace: true })
		} catch (err: any) {
			setError(err?.message || 'Login failed')
		} finally {
			setLoading(false)
		}
	}

	return (
		<section className="mx-auto max-w-md">
			<h2 className="text-2xl font-semibold">Admin Login</h2>
			<p className="mt-1 text-sm text-gray-600">Use your admin credentials to continue.</p>
			<form onSubmit={handleSubmit} className="mt-4 space-y-3">
				<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-md border border-gray-300 p-2" />
				<input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-md border border-gray-300 p-2" />
				{error && <p className="text-sm text-red-600">{error}</p>}
				<button disabled={loading} type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 disabled:opacity-60">{loading ? 'Signing in...' : 'Sign In'}</button>
			</form>
			<p className="mt-3 text-xs text-gray-500">Demo creds: admin@hindustanoil.co / admin123</p>
		</section>
	)
}

export default AdminLogin


