import Image from "next/image";
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="bg-base-200 overflow-x-hidden">
      <Navbar />
      <section className="w-screen h-screen flex flex-row flex-wrap md:flex-nowrap">
        <div className="w-screen h-full flex flex-col p-10 gap-5 md:p-32 md:w-8/12">
          <h1 className="text-2xl">Hola soy, <br /> <span className="text-5xl text-pink-600 font-bold">Nicolás Mendoza</span></h1>
          <p className="text-lg">
            Saludos! Soy un apasionado desarrollador web full-stack con más de seis meses de experiencia práctica.
            Disfruto convirtiendo ideas en experiencias digitales perfectas. Con experiencia en trabajo independiente,
            aporto una trayectoria comprobada de mis aprendizajes y trabajos realizados.
            ¡Creemos algo extraordinario juntos!
          </p>
          <div>
            <a href="/mendozaCV.pdf" class="btn btn-secondary mx-5">Curriculum</a>
            <a href="#proyectos" class="btn btn-neutral mx-5">Mis proyectos</a>
          </div>
        </div>
        <div className="hidden md:flex h-full w-6/12 flex-col p-32 gap-5">
          <figure><Image src="/landing0.svg" alt="A person coding" /></figure>
        </div>
      </section>
      <div className="w-full flex justify-center my-3">
        <h2 id="proyectos" className="text-4xl">Mis proyectos</h2>
      </div>
      <section className="w-screen p-5 flex flex-row flex-wrap gap-10 md:p-24">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image src="/projects/yam-landing.png" alt="Yet Another Minifier" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Yet Another Minifier
              <div className="badge badge-secondary">Nuevo</div>
            </h2>
            <p>A JS and CSS documents and code minifier for optimizations.</p>
            <div className="card-actions">
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">NextJS</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">TailwindCSS</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">SCSS</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">JavaScript</div>
            </div>
            <div className="card-actions justify-center mt-5">
              <a href="https://mendozanicolas.github.io/yet-another-minifier" className="btn btn-primary">Ver proyecto</a>
              <a href="https://github.com/MendozaNicolas/yet-another-minifier" className="btn btn-primary">Ver código</a>

            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image src="/projects/capybara-landing.png" alt="Capybara run" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              CaPYbara run
            </h2>
            <p>Juego creado en python utilizando la libreria pygame</p>
            <div className="card-actions">
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">Python</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">Pygame</div>
            </div>
            <div className="card-actions justify-center mt-5">
              <a href="https://github.com/MendozaNicolas/caPYbara-game" className="btn btn-primary">Ver proyecto</a>
              <a href="https://github.com/MendozaNicolas/caPYbara-game" className="btn btn-primary">Ver código</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image src="/projects/rufus-landing.png" alt="Rufus Player" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Rufus Player
              <div className="badge badge-warning">Incompleto</div>
            </h2>
            <p>Aplicacion Mobile creada en Flutter: Reproductor multimedia que funciona mediante URL de Youtube</p>
            <div className="card-actions">
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">Flutter</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">Dart</div>
            </div>
            <div className="card-actions justify-center mt-5">
              <a href="https://github.com/MendozaNicolas/rufus_player" className="btn btn-primary">Ver proyecto</a>
              <a href="https://github.com/MendozaNicolas/rufus_player" className="btn btn-primary">Ver código</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image src="/projects/yeti-landing.png" alt="Yeti Heladeria" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Yeti Heladeria
            </h2>
            <p>Landing Page de heladeria hecha con ReactJS y Bootstrap</p>
            <div className="card-actions">
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">Bootstrap</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">SCSS</div>
            </div>
            <div className="card-actions justify-center mt-5">
              <a href="https://mendozanicolas.github.io/yeti-app/" className="btn btn-primary">Ver proyecto</a>
              <a href="https://github.com/MendozaNicolas/yeti-app" className="btn btn-primary">Ver código</a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image src="/projects/ficus-landing.png" alt="Laravel Ficus" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Laravel Ficus
            </h2>
            <p>Yet another Laravel CRUD project, made from scratch with Laravel.</p>
            <div className="card-actions">
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">Laravel</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">Bootstrap</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">PHP</div>
              <div className="badge hover:badge-secondary hover:badge-outline badge-outline select-none">JavaScript</div>
            </div>
            <div className="card-actions justify-center mt-5">
              <a href="https://mendozanicolas.github.io/laravel-ficus/" className="btn btn-primary">Ver proyecto</a>
              <a href="https://github.com/MendozaNicolas/laravel-ficus" className="btn btn-primary">Ver código</a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center my-3">
        <h2 className="text-4xl">Mis conocimientos</h2>
      </div>
      <section className="p-24 w-screen flex flex-row flex-wrap gap-10">
        <div className="hidden h-full w-screen justify-center flex-col gap-5 md:flex md:w-6/12 md:p-32">
          <figure><Image src="/landing1.svg" alt="A person coding" /></figure>
        </div>
        <div className="flex justify-center h-full w-screen flex-row gap-5 flex-wrap md:flex md:w-5/12 md:p-16">
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/html.svg" alt="HTML brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">HTML</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/css.svg" alt="CSS brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">CSS</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/php.svg" alt="PHP brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">PHP</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/javascript.svg" alt="Javascript brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">JavaScript</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/tailwindcss.svg" alt="Tailwindcss brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">Tailwind</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/nodejs.svg" alt="NodeJS brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">NodeJS</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/bootstrap.svg" alt="Bootstrap brand" loading="lazy" className="w-16 h-14 aspect-square" /></figure>
            <p className="text-center">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/nextjs.svg" alt="NextJS brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">NextJS</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/laravel.svg" alt="Laravel brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">Laravel</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/git.svg" alt="Git brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">Git</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/flutter.svg" alt="Flutter brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">Flutter</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/dart.svg" alt="Dart brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">Dart</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/python.svg" alt="Python brand" loading="lazy" className="w-12 h-14 aspect-square" /></figure>
            <p className="text-center">Python</p>
          </div>
          <div className="flex flex-col items-center gap-4 select-none grayscale hover:grayscale-0">
            <figure><Image src="/skills/unity.svg" alt="Unity brand" loading="lazy" className="w-14 aspect-square" /></figure>
            <p className="text-center">Unity</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="flex items-center justify-center p-5"><span>❤ Hecho con amor por Nicolás Mendoza. ❤</span></div>
      </footer>
    </main>
  );
}
