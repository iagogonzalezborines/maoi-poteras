import type { CSSProperties, PointerEvent } from 'react'
import { useState } from 'react'
import clsx from 'clsx'
import type { Lure } from '../data/lures'

type LureCarouselProps = {
  lures: Lure[]
  activeIndex: number
  onSelect: (index: number) => void
}

function LureCarousel({ lures, activeIndex, onSelect }: LureCarouselProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10
    setTilt({ x, y })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <section
      className="lure-stage relative grid min-h-[min(70vh,760px)] translate-x-[4vw] -translate-y-[1.8vh] place-items-center [perspective:1280px] [transform-style:preserve-3d] max-[980px]:min-h-[38vh] max-[640px]:min-h-80 max-[640px]:translate-x-0 max-[640px]:translate-y-0 max-[640px]:overflow-visible"
      aria-label="Poteras destacadas"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{ '--tilt-x': `${tilt.x}deg`, '--tilt-y': `${tilt.y}deg`, '--stage-glow': 1 } as CSSProperties}
    >
      {lures.map((lure, index) => {
        const offset = index - activeIndex
        const wrappedOffset =
          Math.abs(offset) > lures.length / 2 ? offset - Math.sign(offset) * lures.length : offset
        const glowStrength = Math.max(0.08, 1 - Math.min(Math.abs(wrappedOffset), 1))

        return (
          <button
            className={clsx(
              'lure-card absolute grid aspect-[0.68] w-[min(36vw,510px)] min-w-80 cursor-pointer place-items-center border-0 bg-transparent transition-[filter,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none max-[980px]:w-[min(82vw,640px)] max-[980px]:min-w-0 max-[640px]:w-[min(56vw,220px)]',
              index === activeIndex ? 'opacity-100 blur-0' : 'opacity-30 blur-[5px]',
            )}
            key={lure.id}
            type="button"
            aria-label={lure.name}
            aria-pressed={index === activeIndex}
            onClick={() => onSelect(index)}
            style={
              {
                '--offset': wrappedOffset,
                '--accent': lure.accent,
                '--glow-strength': glowStrength,
                '--blend-mode': lure.blendMode,
              } as CSSProperties
            }
          >
            <span className="lure-image-frame block size-full">
              <img
                className="block size-full object-contain"
                src={lure.image}
                alt=""
              />
            </span>
          </button>
        )
      })}
    </section>
  )
}

export default LureCarousel
