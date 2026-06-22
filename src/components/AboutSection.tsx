import maoiLabImage from '../assets/editorial/maoi-lab.png'

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

function AboutSection() {
  return (
    <section
      className="relative scroll-mt-40 overflow-hidden px-[clamp(24px,7vw,120px)] py-[clamp(84px,11vw,140px)] max-[640px]:scroll-mt-28 max-[640px]:px-5"
      id="about"
      aria-label="About MAOI"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-full w-[min(42vw,560px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(190,226,225,0.08),transparent_66%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-20">
        <div className="grid grid-cols-[minmax(280px,0.82fr)_minmax(360px,1.18fr)] gap-[clamp(32px,6vw,96px)] max-[980px]:grid-cols-1">
          <div className="max-w-[28rem]">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.08em] text-white/70">Why MAOI</p>
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.4rem,4vw,5.2rem)] font-normal uppercase leading-[0.94] text-white">
              Biopolimero pensado para pesca real.
            </h2>
          </div>

          <div className="grid gap-8">
            <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(240px,0.92fr)] gap-6 max-[1180px]:grid-cols-1">
              <p className="m-0 max-w-[60ch] text-[1.02rem] leading-8 text-stone-200/82">
                Las poteras MAOI nacen de recursos 100 % renovables y biodegradables. Nuestra base de PLA
                vegetal procede principalmente de almidon de maiz, cana de azucar, yuca y raices de tapioca.
                Frente al plastico derivado del petroleo, este material nos permite construir una pieza mas
                consciente sin renunciar a presencia, lectura de color ni respuesta en accion.
              </p>

              <figure className="m-0 justify-self-end max-[1180px]:justify-self-start">
                <div className="overflow-hidden border border-white/8 bg-white/[0.02] p-2 backdrop-blur-[2px]">
                  <img
                    className="block aspect-[4/3] w-[min(100%,320px)] object-cover"
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

        <div className="grid grid-cols-[minmax(320px,1.08fr)_minmax(280px,0.92fr)] gap-[clamp(28px,5vw,72px)] max-[980px]:grid-cols-1">
          <div className="grid gap-4">
            <p className="m-0 text-xs font-black uppercase tracking-[0.08em] text-white/55">Proceso PLA</p>
            <div className="grid gap-4">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="grid grid-cols-[72px_1fr] gap-5 border-t border-white/10 py-5 max-[640px]:grid-cols-1 max-[640px]:gap-3"
                >
                  <span className="text-sm font-black uppercase text-white/38">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="grid gap-2">
                    <h3 className="m-0 text-[1.15rem] font-semibold uppercase text-white">{item.step}</h3>
                    <p className="m-0 max-w-[54ch] text-sm leading-7 text-stone-300/78">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-4">
            <p className="m-0 text-xs font-black uppercase tracking-[0.08em] text-white/55">Rendimiento</p>
            <div className="grid gap-4">
              {performance.map((item) => (
                <article key={item.title} className="grid gap-3 border border-white/8 bg-black/20 p-6">
                  <h3 className="m-0 text-[1.05rem] font-semibold uppercase text-white">{item.title}</h3>
                  <p className="m-0 text-sm leading-7 text-stone-300/76">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
