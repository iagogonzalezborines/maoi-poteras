import { useEffect, useRef, useState } from 'react'
import maoiLabImage from '../assets/editorial/maoi-lab.png'
import poteraAcid from '../assets/products/potera3-cut.png'

const resources = [
  {
    name: 'Almidon de maiz',
    detail: 'Base vegetal con trazabilidad clara y una respuesta estable en fabricacion.',
  },
  {
    name: 'Cana de azucar',
    detail: 'Aporta origen renovable y una lectura de marca coherente con el producto.',
  },
  {
    name: 'Yuca y tapioca',
    detail: 'Materias primas limpias que refuerzan el perfil biodegradable del compuesto.',
  },
]

const process = [
  {
    step: 'Extraccion',
    copy: 'Se obtiene el almidon o la glucosa de recursos vegetales seleccionados.',
  },
  {
    step: 'Fermentacion',
    copy: 'Microorganismos transforman esos azucares en acido lactico mediante un proceso controlado.',
  },
  {
    step: 'Polimerizacion',
    copy: 'El acido lactico se une para crear cadenas termoplasticas que dan forma al PLA del cuerpo.',
  },
]

const performance = [
  {
    title: 'Glow mas limpio',
    copy: 'La formulacion y el acabado ayudan a que el color se lea con claridad y profundidad en el agua.',
  },
  {
    title: 'Accion mas estable',
    copy: 'Peso, balance y respuesta visual trabajan juntos para que la potera caiga con control real.',
  },
  {
    title: 'Gama idonea',
    copy: 'Pink, Blue y Acid nacen para cubrir situaciones distintas sin romper la coherencia de la coleccion.',
  },
]

const swimFeatures = [
  {
    title: 'Equilibrio',
    copy: 'Centro de gravedad optimizado para maxima estabilidad.',
    icon: 'target',
  },
  {
    title: 'Accion natural',
    copy: 'Movimiento realista que provoca ataques.',
    icon: 'wave',
  },
  {
    title: 'Menos resistencia',
    copy: 'Diseno hidrodinamico que mejora el rendimiento.',
    icon: 'fin',
  },
]

function DiagramIcon({ type }: { type: string }) {
  if (type === 'wave') {
    return (
      <svg className="size-12 text-[#96f255]" viewBox="0 0 80 80" aria-hidden="true">
        <path
          d="M6 48c7-18 17-18 29 0s22 18 35-6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M68 42l5 10 5-10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (type === 'fin') {
    return (
      <svg className="size-12 text-[#96f255]" viewBox="0 0 80 80" aria-hidden="true">
        <path
          d="M14 52c17-26 33-36 53-37-10 11-18 24-26 34-9 4-18 6-27 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M14 52c14-1 28-5 42-22" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }

  return (
    <svg className="size-12 text-[#96f255]" viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="40" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M40 6v68M6 40h68" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function AboutSection() {
  const diagramRef = useRef<HTMLElement | null>(null)
  const [isDiagramVisible, setIsDiagramVisible] = useState(false)

  useEffect(() => {
    const diagram = diagramRef.current

    if (!diagram) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDiagramVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '-18% 0px -18% 0px',
        threshold: 0.22,
      },
    )

    observer.observe(diagram)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <section
        className="snap-section relative grid min-h-svh scroll-mt-0 content-center overflow-hidden px-[clamp(24px,7vw,120px)] py-[clamp(92px,9vw,132px)] max-[640px]:px-5"
        id="about"
        aria-label="About MAOI"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-0 h-full w-[min(42vw,560px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(190,226,225,0.08),transparent_66%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-[1400px] min-w-0 grid-cols-[minmax(280px,0.78fr)_minmax(360px,1.22fr)] items-center gap-[clamp(32px,6vw,96px)] max-[980px]:grid-cols-1">
          <div className="max-w-[31rem]">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.08em] text-white/70">Why MAOI</p>
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.5rem,4.4vw,5.35rem)] font-normal uppercase leading-[0.94] text-white">
              Biopolimero pensado para pesca real.
            </h2>
          </div>

          <div className="grid gap-7">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(220px,0.72fr)] items-start gap-6 max-[1180px]:grid-cols-1">
              <p className="m-0 max-w-[62ch] text-[clamp(0.95rem,1.05vw,1.05rem)] leading-8 text-stone-200/82">
                Las poteras MAOI nacen de recursos 100 % renovables y biodegradables. Nuestra base de PLA
                vegetal procede de almidon de maiz, cana de azucar, yuca y raices de tapioca. Frente al
                plastico derivado del petroleo, este material permite construir una pieza mas consciente sin
                renunciar a presencia, lectura de color ni respuesta en accion.
              </p>

              <figure className="m-0 justify-self-end max-[1180px]:hidden">
                <div className="overflow-hidden border border-white/8 bg-white/[0.02] p-2 backdrop-blur-[2px]">
                  <img
                    className="block aspect-[4/3] w-[min(100%,280px)] object-cover"
                    src={maoiLabImage}
                    alt="Proceso de desarrollo en MAOI LAB"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-white/46">
                  MAOI LAB
                </figcaption>
              </figure>
            </div>

            <div className="grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
              {resources.map((resource) => (
                <article
                  key={resource.name}
                  className="grid gap-3 border border-white/8 bg-white/[0.02] p-5 backdrop-blur-[2px]"
                >
                  <h3 className="m-0 text-sm font-bold uppercase text-white">{resource.name}</h3>
                  <p className="m-0 text-sm leading-6 text-stone-300/78">{resource.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="snap-section relative grid min-h-svh content-center overflow-hidden px-[clamp(24px,7vw,120px)] py-[clamp(104px,8vw,128px)] max-[640px]:px-5"
        id="performance"
        aria-label="Performance MAOI"
      >
        <div
          className="absolute left-1/2 top-0 h-full w-[min(50vw,680px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,255,76,0.055),transparent_68%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-[1400px] min-w-0 gap-[clamp(24px,4vw,48px)]">
          <div className="grid grid-cols-[minmax(300px,0.76fr)_minmax(420px,1.24fr)] items-end gap-[clamp(28px,5vw,76px)] max-[980px]:grid-cols-1">
            <div>
              <p className="m-0 text-xs font-black uppercase tracking-[0.08em] text-white/55">Performance</p>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2.35rem,4vw,4.7rem)] font-normal uppercase leading-[0.94] text-white">
                Precision bajo agua.
              </h2>
              <p className="mt-5 max-w-[36ch] text-sm leading-7 text-stone-300/72">
                Color, balance y material trabajan juntos para que la potera mantenga presencia sin perder
                control en la caida.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 max-[980px]:grid-cols-1">
              {performance.map((item) => (
                <article key={item.title} className="grid min-h-[178px] content-start gap-3 border border-white/8 bg-black/20 p-5">
                  <h3 className="m-0 text-[0.98rem] font-semibold uppercase text-white">{item.title}</h3>
                  <p className="m-0 text-sm leading-6 text-stone-300/76">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 border-y border-white/10 max-[820px]:grid-cols-1">
            {process.map((item, index) => (
              <article
                key={item.step}
                className="grid grid-cols-[48px_1fr] gap-5 border-r border-white/10 py-5 pr-6 last:border-r-0 max-[820px]:border-b max-[820px]:border-r-0 max-[820px]:last:border-b-0"
              >
                <span className="text-sm font-black uppercase text-white/38">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="grid gap-2">
                  <h3 className="m-0 text-[1rem] font-semibold uppercase text-white">{item.step}</h3>
                  <p className="m-0 text-sm leading-6 text-stone-300/76">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
          ref={diagramRef}
          className={`snap-section swim-diagram relative isolate min-h-svh overflow-hidden px-[clamp(36px,6vw,78px)] pb-[clamp(42px,5vw,62px)] pt-[clamp(116px,10vw,138px)] max-[980px]:min-h-0 max-[640px]:px-5 ${
            isDiagramVisible ? 'is-visible' : ''
          }`}
          aria-label="Diagrama de nado MAOI"
        >
          <div className="swim-diagram-bg absolute inset-0 -z-[2]" aria-hidden="true" />
          <div className="water-particles opacity-45" aria-hidden="true" />

          <div className="swim-reveal relative z-[2] grid max-w-[26rem] gap-3">
            <div>
              <h2 className="m-0 text-[clamp(2.2rem,3.45vw,3.75rem)] font-normal uppercase leading-[0.96] text-white">
                Nado
                <span className="block">perfecto</span>
              </h2>
              <p className="mt-4 text-[clamp(0.86rem,0.95vw,1.04rem)] uppercase tracking-[0.08em] text-white/64">
                Equilibrio. Estabilidad. Atraccion.
              </p>
            </div>
            <span className="h-px w-14 bg-[#96f255]" aria-hidden="true" />
            <p className="m-0 max-w-[32ch] text-[0.9rem] leading-6 text-stone-300/72">
              Disenada para mantener una posicion estable y un movimiento natural en cada caida y recogida.
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 z-[1] max-[980px]:relative max-[980px]:mt-14 max-[980px]:min-h-[520px] max-[640px]:min-h-[420px]">
            <svg
              className="swim-flow-lines absolute inset-0 size-full"
              viewBox="0 0 1400 760"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker id="swim-arrow-blue" markerHeight="10" markerWidth="10" orient="auto" refX="8" refY="5">
                  <path d="M0 0 10 5 0 10z" fill="#2bd8ff" />
                </marker>
                <marker id="swim-arrow-green" markerHeight="10" markerWidth="10" orient="auto" refX="8" refY="5">
                  <path d="M0 0 10 5 0 10z" fill="#96f255" />
                </marker>
              </defs>
              <path
                d="M245 398c110 0 82-54 194-90 76-24 158-28 246-27"
                fill="none"
                stroke="#96f255"
                strokeDasharray="7 14"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                d="M724 468c164-26 260-76 382-158"
                fill="none"
                markerEnd="url(#swim-arrow-blue)"
                stroke="#2bd8ff"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M806 526c176-44 272-102 392-230"
                fill="none"
                stroke="#2bd8ff"
                strokeLinecap="round"
                strokeOpacity="0.42"
                strokeWidth="1.2"
              />
              <path
                d="M874 504c146-30 250-82 350-188"
                fill="none"
                markerEnd="url(#swim-arrow-blue)"
                stroke="#7fe8ff"
                strokeLinecap="round"
                strokeOpacity="0.82"
                strokeWidth="1.4"
              />
              <path
                d="M918 192c112-86 186-106 296-122"
                fill="none"
                markerEnd="url(#swim-arrow-green)"
                stroke="#96f255"
                strokeLinecap="round"
                strokeWidth="1.6"
              />
            </svg>

            <img
              className="swim-product absolute left-[57%] top-[50%] z-[2] w-[min(28vw,470px)] max-[980px]:left-[58%] max-[980px]:w-[min(78vw,540px)] max-[640px]:left-1/2 max-[640px]:w-[106vw]"
              src={poteraAcid}
              alt=""
            />

            <div className="swim-reveal swim-reveal-2 absolute left-[16%] top-[53%] z-[3] max-w-[15rem] max-[980px]:left-[6%] max-[980px]:top-[66%]">
              <p className="m-0 text-lg font-medium uppercase tracking-[0.08em] text-[#96f255]">Caida</p>
              <p className="mt-3 text-base leading-7 text-stone-200/70">Descenso recto y equilibrado</p>
            </div>
            <div className="swim-reveal swim-reveal-3 absolute right-[20%] top-[60%] z-[3] max-w-[18rem] max-[980px]:right-[6%] max-[980px]:top-[76%]">
              <p className="m-0 text-lg font-medium uppercase tracking-[0.16em] text-[#2bd8ff]">Nado</p>
              <p className="mt-3 text-base leading-7 text-stone-200/72">
                Movimiento natural que atrae en cualquier condicion
              </p>
            </div>
            <div className="swim-reveal swim-reveal-4 absolute right-[7%] top-[14%] z-[3] max-w-[16rem] max-[980px]:right-[4%] max-[980px]:top-[8%]">
              <p className="m-0 text-lg font-medium uppercase tracking-[0.08em] text-[#96f255]">Recuperacion</p>
              <p className="mt-3 text-base leading-7 text-stone-200/72">Nado estable y controlado</p>
            </div>
          </div>

          <div className="swim-reveal swim-reveal-5 relative z-[3] mt-[clamp(260px,27vw,330px)] grid grid-cols-3 border-y border-white/10 bg-black/18 backdrop-blur-[3px] max-[980px]:mt-10 max-[820px]:grid-cols-1">
            {swimFeatures.map((feature) => (
              <article
                className="grid grid-cols-[62px_1fr] items-center gap-5 border-r border-white/10 p-5 last:border-r-0 max-[820px]:border-b max-[820px]:border-r-0 max-[820px]:last:border-b-0"
                key={feature.title}
              >
                <DiagramIcon type={feature.icon} />
                <div>
                  <h3 className="m-0 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                    {feature.title}
                  </h3>
                  <p className="m-0 mt-3 text-sm leading-6 text-stone-300/72">{feature.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
    </>
  )
}

export default AboutSection
