import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'

function HomeLayout() {
  const isScrolling = useRef(false)

  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll<HTMLElement>('.snap-section'))

    const getCurrentIndex = () => {
      const sections = getSections()
      const currentY = window.scrollY

      return sections.reduce(
        (closest, section, index) => {
          const distance = Math.abs(section.offsetTop - currentY)

          return distance < closest.distance ? { index, distance } : closest
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index
    }

    const goToSection = (direction: number) => {
      const sections = getSections()
      const nextIndex = Math.min(Math.max(getCurrentIndex() + direction, 0), sections.length - 1)
      const nextSection = sections[nextIndex]

      if (!nextSection) {
        return
      }

      isScrolling.current = true
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

      window.setTimeout(() => {
        isScrolling.current = false
      }, 950)
    }

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 12) {
        return
      }

      event.preventDefault()

      if (isScrolling.current) {
        return
      }

      goToSection(event.deltaY > 0 ? 1 : -1)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const nextKeys = ['ArrowDown', 'PageDown', ' ']
      const previousKeys = ['ArrowUp', 'PageUp']

      if (![...nextKeys, ...previousKeys].includes(event.key)) {
        return
      }

      event.preventDefault()

      if (isScrolling.current) {
        return
      }

      goToSection(nextKeys.includes(event.key) ? 1 : -1)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="site-shell min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
    </div>
  )
}

export default HomeLayout
