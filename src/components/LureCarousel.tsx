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
      className="lure-stage absolute inset-x-0 bottom-[92px] top-[112px] z-[1] [perspective:1280px] [transform-style:preserve-3d] max-[980px]:relative max-[980px]:inset-auto max-[980px]:order-2 max-[980px]:min-h-[38vh] max-[640px]:min-h-80 max-[640px]:overflow-visible"
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
        const isActive = index === activeIndex
        const slot =
          wrappedOffset < 0
            ? { x: '6vw', y: '56%', scale: 0.7, z: 1 }
            : wrappedOffset > 0
              ? { x: '94vw', y: '54%', scale: 0.72, z: 1 }
              : { x: '52vw', y: '52%', scale: 1, z: 3 }

        return (
          <button
            className={clsx(
              'lure-card absolute grid aspect-[0.68] w-[min(38vw,560px)] cursor-pointer place-items-center border-0 bg-transparent transition-[filter,opacity,transform,left,top] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none max-[980px]:w-[min(82vw,640px)] max-[640px]:w-[min(56vw,220px)]',
              isActive ? 'opacity-100 blur-0' : 'opacity-25 blur-[7px]',
            )}
            key={lure.id}
            type="button"
            aria-label={lure.name}
            aria-pressed={isActive}
            onClick={() => onSelect(index)}
            style={
              {
                '--offset': wrappedOffset,
                '--slot-x': slot.x,
                '--slot-y': slot.y,
                '--accent': lure.accent,
                '--glow-strength': glowStrength,
                '--blend-mode': lure.blendMode,
                '--slot-scale': slot.scale,
                zIndex: slot.z,
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
