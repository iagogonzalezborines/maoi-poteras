import type { CSSProperties } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Sparkles, Target } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { featuredLures } from '../data/lures'
import LureCarousel from './LureCarousel'

const iconButtonClass =
  'grid size-12 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-stone-100 transition duration-200 hover:-translate-y-px hover:text-[var(--active-accent)] focus-visible:-translate-y-px focus-visible:text-[var(--active-accent)] focus-visible:outline-none max-[640px]:size-10'

function Hero() {
  const [activeIndex, setActiveIndex] = useState(1)
  const activeLure = featuredLures[activeIndex]
  const [displayedIndex, setDisplayedIndex] = useState(1)
  const [copyPhase, setCopyPhase] = useState<'idle' | 'exiting' | 'entering'>('idle')
  const displayedLure = featuredLures[displayedIndex]
  const copyTimers = useRef<number[]>([])

  useEffect(() => {
    if (activeIndex === displayedIndex) {
      return
    }

    copyTimers.current.forEach((timer) => window.clearTimeout(timer))
    setCopyPhase('exiting')

    const exitTimer = window.setTimeout(() => {
      setDisplayedIndex(activeIndex)
      setCopyPhase('entering')
    }, 220)

    const enterTimer = window.setTimeout(() => {
      setCopyPhase('idle')
    }, 620)

    copyTimers.current = [exitTimer, enterTimer]

    return () => {
      copyTimers.current.forEach((timer) => window.clearTimeout(timer))
    }
  }, [activeIndex])

  const [productName, colorName] = useMemo(() => {
    const [lineOne = '', lineTwo = ''] = displayedLure.name.split('\n')
    const words = lineTwo.split(' ')
    const colorWord = words.pop() ?? ''

    return [lineOne, [words.join(' '), colorWord].filter(Boolean).join(' ')]
  }, [displayedLure.name])

  const slideLabel = useMemo(
    () => `${String(activeIndex + 1).padStart(2, '0')} / ${String(featuredLures.length).padStart(2, '0')}`,
    [activeIndex],
  )

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? featuredLures.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % featuredLures.length)
  }

  return (
    <main
      className="snap-section hero relative isolate min-h-dvh overflow-hidden px-[clamp(32px,6vw,112px)] pb-[118px] pt-[132px] max-[980px]:grid max-[980px]:content-center max-[980px]:gap-7 max-[980px]:pt-28 max-[640px]:min-h-0 max-[640px]:px-5 max-[640px]:pb-[52px] max-[640px]:pt-28"
      style={{ '--active-accent': activeLure.accent } as CSSProperties}
    >
      <div className="water-particles" aria-hidden="true" />

      <LureCarousel lures={featuredLures} activeIndex={activeIndex} onSelect={setActiveIndex} />

      <div
        className={`hero-copy absolute left-[clamp(36px,8.5vw,162px)] top-[50%] z-[4] w-[min(47vw,840px)] max-[980px]:static max-[980px]:order-1 max-[980px]:w-auto max-[980px]:max-w-[min(560px,100%)] ${
          copyPhase === 'exiting'
            ? 'is-exiting'
            : copyPhase === 'entering'
              ? 'is-entering'
              : 'is-idle'
        }`}
        style={{ '--copy-accent': displayedLure.accent } as CSSProperties}
      >
        <p className="copy-refract mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--copy-accent)]">
          Nueva
        </p>
        <h1 className="copy-refract m-0 text-[clamp(2rem,3.7vw,3.9rem)] font-light uppercase leading-[0.98] tracking-[-0.04em] text-white max-[640px]:text-[clamp(2.2rem,13vw,3.7rem)]">
          <span className="block whitespace-nowrap">{productName}</span>
          <span className="lure-color-word block">{colorName}</span>
        </h1>
        <p className="copy-refract mt-4 max-w-[34ch] text-[clamp(0.95rem,1vw,1.12rem)] font-normal leading-[1.28] text-white/92 max-[980px]:max-w-[28ch]">
          {displayedLure.finish}
        </p>
        <div className="hero-divider mt-8" aria-hidden="true" />
        <p className="copy-refract mt-5 max-w-[58ch] text-[0.84rem] leading-[1.64] text-white/66 max-[980px]:max-w-[46ch]">
          {displayedLure.description}
        </p>
        <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-3">
          <span className="text-[2.05rem] font-light leading-none tracking-[-0.06em] text-white">
            {displayedLure.price.replace(' EUR', '')}
            <span className="ml-2 text-[1.25rem]">EUR</span>
          </span>
          <span className="pb-1 text-[0.94rem] text-white/35 line-through">
            {displayedLure.compareAtPrice.replace(' EUR', '')} EUR
          </span>
          <span className="inline-flex min-h-10 items-center rounded-[10px] border border-[color:var(--copy-accent)] px-3 text-[0.95rem] font-medium text-[var(--copy-accent)]">
            {displayedLure.discount}
          </span>
        </div>
        <div className="mt-7 flex flex-wrap gap-4 max-[640px]:gap-3">
          <a
            className="pointer-events-auto inline-grid min-h-[58px] min-w-[214px] place-items-center rounded-[6px] bg-[var(--copy-accent)] px-7 text-sm font-black uppercase tracking-[0.06em] text-black transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--copy-accent),transparent_48%)] focus-visible:-translate-y-0.5 focus-visible:shadow-[0_0_30px_color-mix(in_srgb,var(--copy-accent),transparent_48%)] focus-visible:outline-none max-[640px]:w-full"
            href="#shop"
          >
            Comprar ahora
          </a>
          <a
            className="pointer-events-auto inline-flex min-h-[58px] items-center gap-3 border-b border-[color:var(--copy-accent)] px-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-200 hover:text-[var(--copy-accent)] focus-visible:text-[var(--copy-accent)] focus-visible:outline-none"
            href="#collection"
          >
            Ver colores
            <ArrowRight size={17} strokeWidth={1.8} />
          </a>
        </div>
        <div className="mt-8 grid max-w-[620px] grid-cols-3 gap-4 text-white/90 max-[640px]:grid-cols-1">
          {displayedLure.perks.map((perk, index) => {
            const Icon = index === 0 ? Sparkles : index === 1 ? Target : Shield

            return (
              <div className="hero-perk" key={perk}>
                <Icon size={20} strokeWidth={1.8} />
                <span>{perk}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div
        className="absolute right-[clamp(54px,9vw,154px)] top-[60%] z-[5] flex -translate-y-1/2 items-center justify-center gap-[26px] whitespace-nowrap text-base font-semibold text-white max-[980px]:static max-[980px]:order-3 max-[980px]:translate-y-0 max-[980px]:justify-start"
        aria-label="Controles del carrusel"
      >
        <button className={iconButtonClass} onClick={goToPrevious} aria-label="Potera anterior">
          <ChevronLeft size={26} strokeWidth={1.4} />
        </button>
        <span>{slideLabel}</span>
        <button className={iconButtonClass} onClick={goToNext} aria-label="Potera siguiente">
          <ChevronRight size={26} strokeWidth={1.4} />
        </button>
      </div>

      <div
        className="absolute bottom-[44px] right-[clamp(24px,4.5vw,72px)] inline-flex items-center gap-4 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-white/75 max-[980px]:hidden"
        aria-hidden="true"
      >
        <i className="block h-11 w-px bg-white/55" />
        <span>Scroll</span>
      </div>
    </main>
  )
}

export default Hero
