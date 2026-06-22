import { Menu, ShoppingBag } from 'lucide-react'
import logo from '../assets/brand/cromado--logo-sinfondo.png'

function Header() {
  return (
    <header
      className="pointer-events-none fixed left-0 top-0 z-20 grid w-full grid-cols-[1fr_auto_1fr] items-center px-[clamp(22px,4.5vw,72px)] pb-6 pt-[42px] max-[980px]:py-5"
      aria-label="Navegacion principal"
    >
      <button
        className="pointer-events-auto grid size-12 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-stone-100 transition duration-200 hover:-translate-y-px hover:text-[var(--active-accent)] focus-visible:-translate-y-px focus-visible:text-[var(--active-accent)] focus-visible:outline-none max-[640px]:size-10"
        aria-label="Abrir menu"
      >
        <Menu size={28} strokeWidth={1.5} />
      </button>

      <a
        className="brand-mark pointer-events-auto block h-[clamp(66px,7vw,96px)] w-[clamp(146px,12.5vw,220px)] translate-y-[8px] max-[640px]:h-[56px] max-[640px]:w-[112px]"
        href="/"
        aria-label="MAOI inicio"
      >
        <img src={logo} alt="MAOI" />
      </a>

      <nav
        className="site-nav pointer-events-auto flex justify-self-end items-center justify-end gap-[clamp(18px,1.9vw,30px)] text-xs font-bold uppercase max-[980px]:gap-2.5"
        aria-label="Tienda"
      >
        <a href="#shop">Shop</a>
        <a href="#collection">Collection</a>
        <a href="#about">About</a>
        <a href="#cart">Cart</a>
        <button
          className="grid size-12 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-stone-100 transition duration-200 hover:-translate-y-px hover:text-[var(--active-accent)] focus-visible:-translate-y-px focus-visible:text-[var(--active-accent)] focus-visible:outline-none max-[640px]:size-10"
          aria-label="Ver carrito"
        >
          <ShoppingBag size={22} strokeWidth={1.5} />
        </button>
      </nav>
    </header>
  )
}

export default Header
