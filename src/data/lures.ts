import poteraPink from '../assets/products/potera1-glowcut.png'
import poteraBlue from '../assets/products/potera2-glowcut.png'
import poteraAcid from '../assets/products/potera3-glowcut.png'

export type Lure = {
  id: string
  name: string
  label: string
  finish: string
  description: string
  image: string
  accent: string
  blendMode: 'normal' | 'screen'
  price: string
  compareAtPrice: string
  discount: string
  perks: string[]
}

export const featuredLures: Lure[] = [
  {
    id: 'pink',
    name: 'POTERA\nMAOI PINK',
    label: 'New',
    finish: 'Maxima visibilidad. Control absoluto.',
    description: 'Disenada para ataques rapidos, lectura clara del fondo y una presencia que destaca en baja luz.',
    image: poteraPink,
    accent: '#ff2aa3',
    blendMode: 'screen',
    price: '17,00 EUR',
    compareAtPrice: '22,00 EUR',
    discount: '-23%',
    perks: ['Glow intenso', 'Caida estable', 'Coronas reforzadas'],
  },
  {
    id: 'acid',
    name: 'POTERA\nMAOI ACID',
    label: 'New',
    finish: 'Glow profundo. Precision en cada caida.',
    description: 'Disenada para una caida mas estable, maxima visibilidad y el mejor rendimiento en jornadas nocturnas.',
    image: poteraAcid,
    accent: '#00ff4c',
    blendMode: 'screen',
    price: '17,00 EUR',
    compareAtPrice: '22,00 EUR',
    discount: '-23%',
    perks: ['Glow intenso', 'Caida estable', 'Coronas reforzadas'],
  },
  {
    id: 'blue',
    name: 'POTERA\nMAOI BLUE',
    label: 'New',
    finish: 'Disenada para atraer. Construida para durar.',
    description: 'Equilibrio limpio en el agua, destello frio y control constante para trabajar capas medias con confianza.',
    image: poteraBlue,
    accent: '#009dff',
    blendMode: 'screen',
    price: '17,00 EUR',
    compareAtPrice: '22,00 EUR',
    discount: '-23%',
    perks: ['Glow frio', 'Balance preciso', 'Anzuelos reforzados'],
  },
]
