import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'

function HomeLayout() {
  return (
    <div className="site-shell min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
    </div>
  )
}

export default HomeLayout
