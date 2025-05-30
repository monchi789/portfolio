import AnimatedImages from "./AnimatedImages";
import Profile from '/profile.webp';

export function Board() {
  return (
    <div className="flex w-9/12 container mx-auto flex-row gap-x-5 justify-center">
      <div className="border-solid border-2 rounded-2xl">
        <img src={Profile} alt="Profile" className="rounded-2xl object-cover w-80 h-full" />
      </div>
      <div className="flex w-4xl flex-col justify-center gap-y-5">
        <div className="border-solid border-2 rounded-2xl py-4 px-10">
          <p className="text-2xl">
            Hola, soy{" "}
            <span className="text-red-800 font-bold text-3xl">Cristian 💁🏻</span>{" "}
            de Perú 🇵🇪. Soy desarrollador fullstack y trabajo con Python,
            Node.js, Django, React y Next.js. Aprendiendo más sobre Docker y
            Podman.
          </p>
        </div>
        <div className="grid grid-cols-8">
          <div className="col-start-1 col-end-7 flex justify-between items-center">
            <div className="flex flex-col gap-y-5 w-11/12 justify-center">
              <button className="rounded-2xl border-2 border-dashed border-[#4F46E5] px-6 py-3 font-semibold uppercase text-[#4F46E5] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#4F46E5] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none h-24">
                Ver Proyectos
              </button>
              <button className="rounded-2xl border-2 border-dashed border-[#E9556A] px-6 py-3 font-semibold uppercase text-[#E9556A] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#E9556A] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none h-24">
                Descargar CV
              </button>
            </div>
            <div className="flex flex-col items-center w-40">
              <div className="">
                <a href="" className="text-[#151B23]">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>

                <a href="" className="text-[#0A66C2]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 11v5" />
                    <path d="M8 8v.01" />
                    <path d="M12 16v-5" />
                    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                  </svg>
                </a>

                <a href="" className="text-[#FEBA17]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-9">
            <AnimatedImages />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
