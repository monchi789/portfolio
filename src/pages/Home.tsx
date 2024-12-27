import { IconBrandDjango, IconBrandNodejs, IconBrandReact } from "@tabler/icons-react";
import Profile from "../assets/perfil.jpg";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 mt-6 items-center gap-8">
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-2xl">👋 Hola, Soy Cristian 😎</h3>
          <h2 className="text-3xl font-bold">Soy programador full stack 🖥️</h2>
          <div>
            <p className="text-gray-600">
              Soy un apasionado por la tecnología y el desarrollo de software.
              ⌨️ Me encanta aprender nuevas tecnologías y mejorar mis
              habilidades cada día.☀️ Tengo experiencia en el desarrollo de
              aplicaciones web utilizando tecnologías como Python, Django,
              Docker, React, Node.js, y TypeScript.
            </p>
          </div>
          <div className="flex gap-x-2">
            <div className="border-2 border-[#092E20] rounded-2xl flex items-center py-[.2rem] px-[.5rem] bg-[#d6f5e1]">
              <IconBrandDjango color="#092E20" size={24} />
              <span className="font-semibold text-sm">Django</span>
            </div>
            <div className="border-2 border-[#087d96] rounded-2xl flex items-center py-[.2rem] px-[.5rem] bg-[#00c6de]">
              <IconBrandReact color="white" size={24} />
              <span className="font-semibold text-sm text-white">React</span>
            </div>
            <div className="border-2 border-[#569f45] rounded-2xl flex items-center py-[.2rem] px-[.5rem] bg-[#7bbd6b]">
              <IconBrandNodejs color="white" size={24} />
              <span className="font-semibold text-sm text-white">Node Js</span>
            </div>
            <div className="border-2 border-[#092E20] rounded-2xl flex items-center py-[.2rem] px-[.5rem] bg-[#d6f5e1]">
              <IconBrandDjango color="#092E20" size={24} />
              <span className="font-semibold text-sm">Django</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={Profile}
            alt="Foto de Perfil"
            className="rounded-full size-60 md:size-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
