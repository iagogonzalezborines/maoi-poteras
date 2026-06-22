import type { CSSProperties } from 'react'
import { Camera, ChevronLeft, ChevronRight, Music2, Play } from 'lucide-react'
import { useMemo, useState } from 'react'
import { featuredLures } from '../data/lures'
import LureCarousel from './LureCarousel'

const iconButtonClass =
  'grid size-12 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-stone-100 transition duration-200 hover:-translate-y-px hover:text-[var(--active-accent)] focus-visible:-translate-y-px focus-visible:text-[var(--active-accent)] focus-visible:outline-none max-[640px]:size-10'

const socialLinkClass =
  'grid size-8 place-items-center text-white/90 transition duration-200 hover:-translate-y-0.5 hover:text-[var(--active-accent)] focus-visible:-translate-y-0.5 focus-visible:text-[var(--active-accent)] focus-visible:outline-none'

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeLure = featuredLures[activeIndex]

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
      className="hero relative isolate grid min-h-dvh grid-cols-[minmax(250px,0.72fr)_minmax(620px,1.9fr)_minmax(240px,0.58fr)] items-center px-[clamp(32px,6vw,112px)] pb-[118px] pt-[150px] max-[980px]:grid-cols-1 max-[980px]:content-center max-[980px]:gap-7 max-[980px]:pt-28 max-[640px]:min-h-0 max-[640px]:px-5 max-[640px]:pb-[52px] max-[640px]:pt-28"
      style={{ '--active-accent': activeLure.accent } as CSSProperties}
    >
      <div className="water-particles" aria-hidden="true" />

      <div className="z-[2] max-w-[300px] translate-y-[2vh] max-[980px]:max-w-[min(520px,100%)] max-[980px]:translate-y-0">
        <p className="mb-[18px] text-xs font-extrabold uppercase text-white">{activeLure.label}</p>
        <h1 className="m-0 whitespace-pre-line text-[clamp(2.35rem,3vw,4.2rem)] font-normal uppercase leading-[1.16] text-white max-[640px]:text-[clamp(2rem,13vw,3.3rem)]">
          {activeLure.name}
        </h1>
        <p className="mt-[30px] max-w-[22ch] text-sm font-semibold uppercase leading-[1.65] text-stone-100/80 max-[980px]:max-w-[42ch]">
          {activeLure.finish}
        </p>
        <a
          className="mt-11 inline-grid min-h-[62px] min-w-[188px] place-items-center border border-white/70 bg-transparent text-xs font-black uppercase text-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--active-accent)] hover:bg-white/[0.04] hover:shadow-[0_0_26px_color-mix(in_srgb,var(--active-accent),transparent_50%)] focus-visible:-translate-y-0.5 focus-visible:border-[var(--active-accent)] focus-visible:bg-white/[0.04] focus-visible:shadow-[0_0_26px_color-mix(in_srgb,var(--active-accent),transparent_50%)] focus-visible:outline-none max-[640px]:mt-7 max-[640px]:min-h-14 max-[640px]:w-full"
          href="#shop"
        >
          Descubrir
        </a>
      </div>

      <LureCarousel lures={featuredLures} activeIndex={activeIndex} onSelect={setActiveIndex} />

      <div
        className="z-[3] flex translate-x-[1.5vw] items-center justify-center gap-[26px] whitespace-nowrap text-base font-semibold text-white max-[980px]:justify-start"
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
        className="absolute bottom-[42px] left-[clamp(24px,4.5vw,72px)] flex gap-7 max-[980px]:static max-[980px]:mt-2"
        aria-label="Redes sociales"
      >
        <a className={socialLinkClass} href="https://www.instagram.com/" aria-label="Instagram">
          <Camera size={20} strokeWidth={1.8} />
        </a>
        <a className={socialLinkClass} href="https://www.tiktok.com/" aria-label="TikTok">
          <Music2 size={20} strokeWidth={1.8} />
        </a>
        <a className={socialLinkClass} href="https://www.youtube.com/" aria-label="YouTube">
          <Play size={20} strokeWidth={1.8} />
        </a>
      </div>

      <div
        className="best-sellers-peek absolute bottom-5 left-[clamp(24px,7vw,112px)] right-[clamp(24px,7vw,112px)] flex items-center justify-center gap-[clamp(16px,2.2vw,36px)] text-xs font-extrabold uppercase text-white/70"
        id="collection"
        aria-label="Best sellers"
      >
        <span className="text-white/90">Best sellers</span>
        <button className="best-seller-dot" type="button">
          Pink
        </button>
        <button className="best-seller-dot" type="button">
          Blue
        </button>
        <button className="best-seller-dot" type="button">
          Green
        </button>
      </div>

      <div
        className="absolute bottom-[50px] right-[clamp(24px,4.5vw,72px)] inline-flex items-center gap-4 text-[0.68rem] font-extrabold uppercase text-white/75 max-[980px]:hidden"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <i className="block h-11 w-px bg-white/55" />
      </div>
    </main>
  )
}

export default Hero
