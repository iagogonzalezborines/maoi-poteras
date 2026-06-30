import { Anchor, Crosshair, ShieldCheck, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import poteraAcid from '../assets/products/potera3-glowcut.png'

const whyFeatures = [
  {
    title: 'Glow intenso',
    copy: 'Maxima visibilidad en condiciones de poca luz. Mas tiempo, mas ataques.',
    icon: Sparkles,
  },
  {
    title: 'Caida equilibrada',
    copy: 'Disenadas para mantener una caida estable y natural que provoca mas picadas.',
    icon: Crosshair,
  },
  {
    title: 'Coronas reforzadas',
    copy: 'Coronas afiladas y resistentes que aseguran una sujecion firme en cada captura.',
    icon: Anchor,
  },
  {
    title: 'Materiales premium',
    copy: 'Materiales seleccionados para resistir el uso intensivo y el ambiente marino.',
    icon: ShieldCheck,
  },
]

const technologySteps = [
  {
    label: 'Balance',
    title: 'Centro de gravedad controlado',
    copy: 'El peso se reparte para favorecer una caida estable y una respuesta predecible en la recogida.',
  },
  {
    label: 'Cuerpo',
    title: 'Perfil curvado hidrodinamico',
    copy: 'La silueta trabaja con la corriente para mantener lectura visual sin volverse torpe bajo el agua.',
  },
  {
    label: 'Acabado',
    title: 'Glow profundo por capas',
    copy: 'Color, transparencia y reflejos se combinan para generar presencia incluso con baja luz.',
  },
]

const swimFeatures = [
  {
    title: 'Equilibrio',
    copy: 'Centro de gravedad optimizado para maxima estabilidad.',
  },
  {
    title: 'Accion natural',
    copy: 'Movimiento realista que provoca ataques.',
  },
  {
    title: 'Menos resistencia',
    copy: 'Diseno hidrodinamico que mejora el rendimiento.',
  },
]

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
        className="snap-section why-maoi relative isolate grid min-h-svh overflow-hidden bg-black pt-[clamp(92px,8vw,124px)]"
        id="about"
        aria-label="Por que MAOI"
      >
        <div className="water-particles opacity-25" aria-hidden="true" />
        <div className="relative z-[1] mx-auto grid w-full max-w-[1300px] content-center px-[clamp(24px,7vw,120px)] pb-[clamp(38px,4vw,58px)] text-center max-[640px]:px-5">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.48em] text-white/68">
            Por que MAOI
          </p>
          <h2 className="why-title mx-auto mt-5 max-w-[18ch] text-[clamp(3rem,4.9vw,5.9rem)] font-black uppercase leading-[0.92] text-white">
            Disenada para rendir.
          </h2>
          <p className="mx-auto mt-5 max-w-[52rem] text-[clamp(1rem,1.12vw,1.16rem)] leading-8 text-white/68">
            Cada detalle de nuestras poteras esta pensado para ofrecerte el maximo rendimiento en cada lance.
          </p>

          <div className="mt-[clamp(38px,4.4vw,58px)] grid grid-cols-4 border-white/18 text-left max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
            {whyFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <article
                  className="why-feature grid justify-items-center gap-5 border-r border-white/22 px-[clamp(18px,2.2vw,38px)] text-center last:border-r-0 max-[980px]:border-b max-[980px]:py-8 max-[980px]:even:border-r-0 max-[640px]:border-r-0"
                  key={feature.title}
                >
                  <Icon className="size-12 text-white" strokeWidth={1.25} />
                  <h3 className="m-0 text-[1rem] font-semibold uppercase tracking-[0.08em] text-white">
                    {feature.title}
                  </h3>
                  <p className="m-0 max-w-[18rem] text-sm leading-7 text-white/62">{feature.copy}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="relative z-[1] mt-auto bg-[#f4f2ed] text-black">
          <div className="mx-auto grid min-h-[242px] max-w-[1360px] grid-cols-[minmax(320px,0.82fr)_minmax(360px,1.18fr)] items-center gap-[clamp(28px,4vw,68px)] px-[clamp(24px,7vw,120px)] py-[clamp(30px,4vw,46px)] max-[900px]:grid-cols-1 max-[640px]:px-5">
            <div>
              <p className="section-kicker m-0 text-xs font-bold uppercase tracking-[0.42em] text-black/58">
                Nuestro compromiso
              </p>
              <h3 className="why-commit-title mt-6 max-w-[23ch] text-[clamp(1.8rem,2.6vw,3.15rem)] font-black uppercase leading-[1.05] text-black">
                No fabricamos poteras. Disenamos herramientas para pescar mejor.
              </h3>
              <p className="mt-5 max-w-[34rem] text-sm leading-7 text-black/58">
                Probamos, ajustamos y perfeccionamos cada detalle para que tengas en la mano una potera
                en la que puedes confiar dia tras dia.
              </p>
            </div>
            <img
              className="why-commit-product justify-self-end object-contain max-[900px]:justify-self-center"
              src={poteraAcid}
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="snap-section technology-section relative isolate grid min-h-svh content-center overflow-hidden px-[clamp(24px,7vw,120px)] py-[clamp(96px,9vw,132px)] max-[640px]:px-5"
        id="technology"
        aria-label="Tecnologia MAOI"
      >
        <div className="absolute inset-0 -z-[2] bg-[#050605]" />
        <div className="absolute left-1/2 top-0 -z-[1] h-full w-[min(46vw,680px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(0,255,76,0.12),transparent_68%)]" />
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[minmax(310px,0.8fr)_minmax(420px,1.2fr)] items-center gap-[clamp(34px,6vw,92px)] max-[980px]:grid-cols-1">
          <div>
            <p className="section-kicker m-0 text-xs font-bold uppercase tracking-[0.42em] text-white/52">
              Tecnologia
            </p>
            <h2 className="mt-5 max-w-[11ch] text-[clamp(2.8rem,5.1vw,5.9rem)] font-light uppercase leading-[0.94] text-white">
              Hecha para controlar la caida.
            </h2>
            <p className="mt-7 max-w-[38rem] text-base leading-8 text-white/64">
              La potera no solo tiene que verse. Tiene que bajar bien, sostener el ritmo y responder cuando
              cambias la velocidad.
            </p>
          </div>
          <div className="grid gap-4">
            {technologySteps.map((step, index) => (
              <article className="grid grid-cols-[84px_1fr] gap-6 border-y border-white/10 py-7" key={step.title}>
                <span className="text-sm font-black uppercase tracking-[0.28em] text-[#00ff4c]/72">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="m-0 text-xs font-bold uppercase tracking-[0.22em] text-white/38">{step.label}</p>
                  <h3 className="mt-2 text-[1.35rem] font-semibold uppercase text-white">{step.title}</h3>
                  <p className="mt-3 max-w-[42rem] text-sm leading-7 text-white/62">{step.copy}</p>
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
        id="water"
        aria-label="Como se comporta en el agua"
      >
        <div className="swim-diagram-bg absolute inset-0 -z-[2]" aria-hidden="true" />
        <div className="water-particles opacity-45" aria-hidden="true" />

        <div className="swim-reveal relative z-[2] grid max-w-[28rem] gap-3">
          <p className="section-kicker m-0 text-xs font-bold uppercase tracking-[0.42em] text-white/52">
            En el agua
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,3.45vw,3.75rem)] font-normal uppercase leading-[0.96] text-white">
            Nado
            <span className="block">estable</span>
          </h2>
          <span className="h-px w-14 bg-[#96f255]" aria-hidden="true" />
          <p className="m-0 max-w-[34ch] text-[0.9rem] leading-6 text-stone-300/72">
            Disenada para mantener posicion, lectura visual y respuesta natural en cada caida y recogida.
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
        </div>

        <div className="swim-reveal swim-reveal-5 relative z-[3] mt-[clamp(260px,27vw,330px)] grid grid-cols-3 border-y border-white/10 bg-black/18 backdrop-blur-[3px] max-[980px]:mt-10 max-[820px]:grid-cols-1">
          {swimFeatures.map((feature, index) => (
            <article
              className="grid grid-cols-[62px_1fr] items-center gap-5 border-r border-white/10 p-5 last:border-r-0 max-[820px]:border-b max-[820px]:border-r-0 max-[820px]:last:border-b-0"
              key={feature.title}
            >
              <span className="grid size-12 place-items-center border border-[#96f255]/70 text-sm font-black text-[#96f255]">
                {String(index + 1).padStart(2, '0')}
              </span>
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
