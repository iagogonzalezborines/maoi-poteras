import poteraPink from '../assets/products/potera1-glowcut.png'
import poteraBlue from '../assets/products/potera2-glowcut.png'
import poteraAcid from '../assets/products/potera3-cut.png'

export type Lure = {
  id: string
  name: string
  label: string
  finish: string
  image: string
  accent: string
  blendMode: 'normal' | 'screen'
}

export const featuredLures: Lure[] = [
  {
    id: 'pink',
    name: 'POTERA\nMAOI PINK',
    label: 'New',
    finish: 'Maxima visibilidad. Control absoluto.',
    image: poteraPink,
    accent: '#ff2aa3',
    blendMode: 'normal',
  },
  {
    id: 'acid',
    name: 'POTERA\nMAOI ACID',
    label: 'New',
    finish: 'Glow profundo. Precision en cada caida.',
    image: poteraAcid,
    accent: '#00ff4c',
    blendMode: 'normal',
  },
  {
    id: 'blue',
    name: 'POTERA\nMAOI BLUE',
    label: 'New',
    finish: 'Disenada para atraer. Construida para durar.',
    image: poteraBlue,
    accent: '#009dff',
    blendMode: 'normal',
  },
]
