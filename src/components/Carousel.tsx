import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export type CarouselItem = {
	id: string
	title: string
	imageUrl: string
}

type Props = {
    items: CarouselItem[]
    slideClassName?: string // optional height/size override per slide
}

function Carousel({ items, slideClassName = 'aspect-[16/9]' }: Props) {
	const [index, setIndex] = useState(0)
	const [paused, setPaused] = useState(false)
	const total = items.length
	const current = items[index]

	function prev() {
		setIndex((i) => (i - 1 + total) % total)
	}
	function next() {
		setIndex((i) => (i + 1) % total)
	}

	useEffect(() => {
		if (total <= 1) return
		if (paused) return
		const id = setInterval(() => {
			setIndex((i) => (i + 1) % total)
		}, 3000)
		return () => clearInterval(id)
	}, [total, paused])

	return (
		<div
			className="relative overflow-hidden rounded-xl border border-gray-200 bg-white"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className="relative w-full">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
                {items.map((it) => (
                    <Link to={`/products/${it.id}`} key={it.id} className={`${slideClassName} min-w-full shrink-0 grow-0 block cursor-pointer group relative`}>
							<img
								src={it.imageUrl}
								alt={it.title}
								className="h-full w-full object-cover group-hover:brightness-75 transition-all"
								loading="lazy"
								referrerPolicy="no-referrer"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-2">
				<button onClick={prev} className="rounded-md bg-white/80 px-3 py-1 text-sm text-gray-800 shadow hover:bg-white">
					Prev
				</button>
				<button onClick={next} className="rounded-md bg-white/80 px-3 py-1 text-sm text-gray-800 shadow hover:bg-white">
					Next
				</button>
			</div>
			<div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
				{items.map((_, i) => (
					<span key={i} className={`h-1.5 w-4 rounded-full ${i === index ? 'bg-indigo-600' : 'bg-gray-300'}`} />
				))}
			</div>
		</div>
	)
}

export default Carousel
