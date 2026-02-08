function Icon({ name, className }: { name: 'facebook' | 'instagram' | 'justdial' | 'instamart'; className?: string }) {
	if (name === 'facebook') {
		return (
			<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
				<path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
			</svg>
		)
	}
	if (name === 'instagram') {
		return (
			<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
				<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1.4 1.4 1 1 0 0 1 1.4-1.4z" />
			</svg>
		)
	}
	if (name === 'justdial') {
		return (
			<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
				<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 6h2v8h-2zm-3 0h2v8H10z" />
			</svg>
		)
	}
	// instamart placeholder bag icon
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
			<path d="M6 7l1.5-3h9L18 7h3v2H3V7z" />
			<path d="M5 9h14l-1 10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" />
		</svg>
	)
}

function Footer() {
	return (
		<footer className="border-t bg-white">
			<div className="mx-auto max-w-5xl px-4 py-8">
				<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-lg font-semibold">Hindustan Oil Company</p>
						<p className="mt-1 text-sm text-gray-600">Quality petroleum-based products: grease, red oil, black oil, and more.</p>
						<p className="mt-2 text-sm text-gray-700">Phone: +91-98765-43210</p>
						<p className="text-sm text-gray-700">Email: contact@hindustanoil.co</p>
					</div>
					<div className="flex items-center gap-4 text-gray-600">
						<a href="#" aria-label="Facebook" className="hover:text-indigo-600"><Icon name="facebook" className="h-6 w-6" /></a>
						<a href="#" aria-label="Instagram" className="hover:text-indigo-600"><Icon name="instagram" className="h-6 w-6" /></a>
						<a href="#" aria-label="Justdial" className="hover:text-indigo-600"><Icon name="justdial" className="h-6 w-6" /></a>
						<a href="#" aria-label="Instamart" className="hover:text-indigo-600"><Icon name="instamart" className="h-6 w-6" /></a>
					</div>
				</div>
				<p className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} Hindustan Oil Company. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
