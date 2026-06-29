import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/brand/cromado--logo-sinfondo.png'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`pointer-events-none fixed left-0 top-0 z-20 w-full transition-[padding,background-color,backdrop-filter,box-shadow] duration-500 ${
        isScrolled
          ? 'bg-[rgba(3,5,5,0.52)] shadow-[0_12px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      aria-label="Navegacion principal"
    >
      <div
        className={`grid grid-cols-[1fr_auto_1fr] items-center px-[clamp(22px,4.5vw,72px)] transition-[padding] duration-500 ${
          isScrolled ? 'pb-4 pt-3.5 max-[980px]:py-3.5' : 'pb-5 pt-[26px] max-[980px]:py-4'
        }`}
      >
        <button
          className="pointer-events-auto grid size-12 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-stone-100 transition duration-200 hover:-translate-y-px hover:text-[var(--active-accent)] focus-visible:-translate-y-px focus-visible:text-[var(--active-accent)] focus-visible:outline-none max-[640px]:size-10"
          aria-label="Abrir menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>

        <a
          className={`brand-mark pointer-events-auto block transition-[transform,width,height,opacity] duration-500 ${
            isScrolled
              ? 'h-[clamp(56px,5.8vw,82px)] w-[clamp(126px,10.8vw,188px)] translate-y-0 opacity-95 max-[640px]:h-[50px] max-[640px]:w-[102px]'
              : 'h-[clamp(66px,7vw,96px)] w-[clamp(146px,12.5vw,220px)] translate-y-[2px] max-[640px]:h-[56px] max-[640px]:w-[112px]'
          }`}
          href="/"
          aria-label="MAOI inicio"
        >
          <img src={logo} alt="MAOI" />
        </a>

        <nav
          className="site-nav pointer-events-auto flex justify-self-end items-center justify-end gap-[clamp(18px,1.9vw,30px)] text-[0.74rem] font-medium uppercase tracking-[0.22em] max-[980px]:gap-2.5"
          aria-label="Tienda"
        >
          <a href="#collection">Coleccion</a>
          <a href="#about">Tecnologia</a>
          <a href="#about">Sobre MAOI</a>
          <a className="site-nav-cta" href="#shop">
            Comprar
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
