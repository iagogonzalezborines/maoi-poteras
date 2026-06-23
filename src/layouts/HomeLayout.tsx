import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'

function HomeLayout() {
  const isScrolling = useRef(false)
  const animationFrame = useRef<number | null>(null)

  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll<HTMLElement>('.snap-section'))

    const easeInOutCubic = (progress: number) =>
      progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2

    const animateScrollTo = (targetY: number) => {
      const startY = window.scrollY
      const distance = targetY - startY
      const duration = 1250
      const startTime = window.performance.now()

      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current)
      }

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)

        window.scrollTo(0, startY + distance * easedProgress)

        if (progress < 1) {
          animationFrame.current = window.requestAnimationFrame(step)
          return
        }

        window.scrollTo(0, targetY)
        animationFrame.current = null
        isScrolling.current = false
      }

      animationFrame.current = window.requestAnimationFrame(step)
    }

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
      const currentIndex = getCurrentIndex()
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1)
      const nextSection = sections[nextIndex]

      if (nextIndex === currentIndex) {
        return
      }

      if (!nextSection) {
        return
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        nextSection.scrollIntoView({ block: 'start' })
        return
      }

      isScrolling.current = true
      animateScrollTo(nextSection.offsetTop)
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
      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current)
      }

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
