import type { ReactNode } from 'react'

type Props = {
	open: boolean
	onClose: () => void
	children: ReactNode
	title?: string
}

function Modal({ open, onClose, children, title }: Props) {
	if (!open) return null
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black/40" onClick={onClose} />
			<div className="relative z-10 w-full max-w-md rounded-xl bg-white p-4 shadow-lg">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-semibold">{title ?? 'Dialog'}</h3>
					<button onClick={onClose} className="rounded p-2 text-gray-500 hover:bg-gray-100" aria-label="Close">×</button>
				</div>
				<div className="mt-3">{children}</div>
			</div>
		</div>
	)
}

export default Modal


